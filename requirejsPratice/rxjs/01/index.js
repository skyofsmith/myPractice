// import * as rxjs from 'rxjs'
window.Rx = rxjs
console.log(rxjs)
const { fromEvent } = rxjs

rxjs.of(1, 2, 3)

// use
var button = document.querySelector('button#btn1')
button.addEventListener('click', () => console.log('Clicked!'))

var button = document.querySelector('button#btn2')
rxjs.fromEvent(button, 'click').subscrible(() => console.log('Clicked!'))
