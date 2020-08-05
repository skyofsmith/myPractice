const xs = xstream.default;
const {div, input, p, makeDOMDriver} = CycleDOM;

function main(sources) {
  const sinks = {
    DOM: sources.DOM
      .select('input').events('change')
      .map(ev => ev.target.checked)
      .startWith(false)
      .map(toggled =>
        div([
          input({attrs: {type: 'checkbox'}}), 'Toggle me',
          p(`${toggled ? 'ON' : 'off'}`)
        ])
      )
  };
  return sinks;
}

Cycle.run(main, {
  DOM: makeDOMDriver('#app')
});