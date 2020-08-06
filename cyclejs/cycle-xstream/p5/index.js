window.xs = xstream.default;

function main(sources) {
  const click$ = sources.DOM
  return {
    DOM: click$.startWith(null).map(() =>
      xs.periodic(1000)
        .fold(prev => prev + 1, 0)
    )
      .flatten()
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
  const domSource = fromEvent(document, 'click');
  return domSource;
}

function logDriver(msg$) {
  msg$.subscribe({
    next: msg => {
      console.log(msg)
    }
  })
}

function run(mainFn, drivers) {
  const fakeDOMSink = xs.create()
  const domSource = domDriver(fakeDOMSink);
  const sinks = mainFn({DOM: domSource});
  fakeDOMSink.imitate(sinks.DOM)
  /*Object.keys(drivers).forEach(key => {
    if (sink[key]) {
      drivers[key](sink[key])
    }
  })*/
}

run(main, {
  DOM: domDriver,
  log: logDriver
});