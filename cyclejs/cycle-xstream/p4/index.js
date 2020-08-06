window.xs = xstream.default;

function main() {
  return {
    DOM: xs.periodic(1000)
      .fold(prev => prev + 1, 0)
      .map(i => `Secondselapsed:${i}`),
    log: xs.periodic(2000)
      .fold(prev => prev + 1, 0)
  }
}

function domDriver(text$) {
  text$.subscribe({
    next: str => {
      const elem = document.querySelector('#app');
      elem.textContent = str
    }
  });
}

function logDriver(msg$) {
  msg$.subscribe({
    next: msg => {
      console.log(msg)
    }
  })
}

function run(mainFn, drivers) {
  const sink = mainFn();
  Object.keys(drivers).forEach(key => {
    if (sink[key]) {
      drivers[key](sink[key])
    }
  })
}

run(main, {
  DOM: domDriver,
  log: logDriver
});