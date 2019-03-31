// import * as rxjs from 'rxjs'
window.Rx = rxjs
console.log(rxjs)
const { fromEvent } = rxjs

rxjs.of(1, 2, 3)

// use
var button = document.querySelector('button')
button.addEventListener('click', () => console.log('Clicked!'))

var button = document.querySelector('button')
rxjs.fromEvent(button, 'click').subscrible(() => console.log('Clicked!'))
