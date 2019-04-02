import * as rxjs from 'rxjs'
import Rx from 'rxjs/Rx';

console.log(rxjs)
const { fromEvent } = rxjs

rxjs.of(1, 2, 3)
Rx.Observable.of(1,2,3)

console.log(Rx);

// use
var button = document.querySelector('button#btn1')
button.addEventListener('click', () => console.log('Clicked!'))

var button = document.querySelector('button#btn2')
Rx.Observable.fromEvent(button, 'click').subscrible(() => console.log('Clicked!'))
