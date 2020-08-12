import xs from 'xstream'
import { run } from '@cycle/run'
import { div, input, h2, makeDOMDriver } from '@cycle/dom'

function renderWeightSlider(weight) {
  return div([
    'Weight ' + weight + 'kg',
    input('.weight', { type: 'range', min: 40, max: 140, value: weight }),
  ])
}

function renderHeightSlider(height) {
  return div([
    'Height ' + height + 'cm',
    input('.height', { type: 'range', min: 140, max: 210, value: height }),
  ])
}

function bmi(weight, height) {
  const heightMeters = height * 0.01
  return Math.round(weight / (heightMeters * heightMeters))
}

function intent(domSource) {
  return {
    changeWeight$: domSource
      .select('.weight')
      .events('input')
      .map((ev) => ev.target.value),
    changeHeight$: domSource
      .select('.height')
      .events('input')
      .map((ev) => ev.target.value),
  }
}

function model(actions) {
  const weight$ = actions.changeWeight$.startWith(70)
  const height$ = actions.changeHeight$.startWith(170)

  return xs.combine(weight$, height$).map(([weight, height]) => {
    return { weight, height, bmi: bmi(weight, height) }
  })
}

function view(state$) {
  return state$.map(({ weight, height, bmi }) =>
    div([
      renderWeightSlider(weight),
      renderHeightSlider(height),
      h2('BMI is ' + bmi),
    ])
  )
}

function main(sources) {
  return { DOM: view(model(intent(sources.DOM))) }
}

run(main, {
  DOM: makeDOMDriver('#app'),
})
