import xs from 'xstream';
import {run} from '@cycle/run';
import {div, input, h2, makeDOMDriver} from '@cycle/dom';

    function renderWeightSlider(weight) {
        return div([
            'Weight ' + weight + 'kg',
            input('.weight', {type: 'range', min: 40, max: 140, value: weight})
        ]);
    }
    
    function renderHeightSlider(height) {
        return div([
            'Height ' + height + 'cm',
            input('.height', {type: 'range', min: 140, max: 210, value: height})
        ]);
    }
    
    function bmi(weight, height) {
        const heightMeters = height * 0.01;
        return Math.round(weight / (heightMeters * heightMeters));
    }
    function main(sources) {
    
    const changeWeight$ = sources.DOM.select('.weight')
        .events('input')
        .map(ev => ev.target.value);

    const changeHeight$ = sources.DOM.select('.height')
        .events('input')
        .map(ev => ev.target.value);

    const weight$ = changeWeight$.startWith(70);
    const height$ = changeHeight$.startWith(170);

    const state$ = xs.combine(weight$, height$)
        .map(([weight, height]) => {
            const heightMeters = height * 0.01;
            const bmi = Math.round(weight / (heightMeters * heightMeters));
            return {weight, height, bmi: bmi(weight, height)};
        });

    const vdom$ = state$.map(({weight, height, bmi}) =>
        div([
            renderWeightSlider(weight),
            renderHeightSlider(height),
            h2('BMI is ' + bmi)
        ])
    );

    return {
        DOM: vdom$
    };
}

run(main, {
    DOM: makeDOMDriver('#app')
});
