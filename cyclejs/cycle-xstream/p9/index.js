window.xs = xstream.default;

function h(tagName, children) {
  return {
    tagName,
    children
  }
}

function h1(children) {
  return {
    tagName: 'H1',
    children
  }
}

function span(children) {
  return {
    tagName: 'SPAN',
    children
  }
}

function main(sources) {
  const click$ = sources.DOM.selectEvents('span', 'click');
  return {
    DOM: click$.startWith(null).map(() =>
      xs.periodic(1000)
        .fold(prev => prev + 1, 0)
    )
      .flatten()
      .map(i => h1([
        span([`Seconds elapsed: ${i}`])
      ])),
    // .map(i => `Secondselapsed:${i}`),
    log: xs.periodic(2000)
      .fold(prev => prev + 1, 0)
  }
}

function domDriver(obj$) {
  obj$.subscribe({
    next: str => {
      function createElement(obj) {
        const element = document.createElement(obj.tagName);
        obj.children.forEach(child => {
          if (typeof child === 'object') {
            element.appendChild(createElement(child));
          } else {
            element.textContent = child;
          }
        });
        return element;
      }

      const container = document.querySelector('#app');
      container.textContent = '';
      const element = createElement(obj);
      container.appendChild(element);
    }
  });
  const domSource = {
    selectEvents: function (tagName, eventType) {
      return fromEvent(document, eventType)
        .filter(ev => ev.target.tagName === tagName.toUpperCase());
    }
  };
  return domSource;
}

function logDriver(msg$) {
  msg$.subscribe({
    next: msg => {
      console.log(msg)
    }
  })
}

/*
function run(mainFn, drivers) {
  const fakeSinks= {};
  Object.keys(drivers).forEach(key => {
    fakeSinks[key] = xs.create();
  });
  const sources = {};
  Object.keys(drivers).forEach(key => {
    drivers[key](fakeSinks[key])
  });
  const sinks = mainFn(sources);
  Object.keys(sinks).forEach(key => {
    fakeSinks[key].imitate(sinks[key])
  })
}
*/

Cycle.run(main, {
  DOM: domDriver,
  log: logDriver
});