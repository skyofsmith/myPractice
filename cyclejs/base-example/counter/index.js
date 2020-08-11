import xs from 'xstream';
import {run} from '@cycle/run';
import {div, button, p, makeDOMDriver} from '@cycle/dom';

function main(sources) {
  const action$ = xs.merge(
    sources.DOM.select('.dec').events('click').mapTo(-1),
    sources.DOM.select('.inc').events('click').mapTo(+1)
  );
  const count$ = action$.fold((x, y) => x + y, 0);
  const vdom$ = count$.map(count =>
    div([
      button('.dec', 'Decrement'),
      button('.inc', 'Increment'),
      p('Counter: ' + count)
    ])
  );
  return {
    DOM: vdom$
  };
}

run(main, {
  DOM: makeDOMDriver('#app')
});
