// import * as rxjs from 'rxjs'
const rxjs = require('rxjs')

// console.log(rxjs);
const {
  fromEvent
} = rxjs;

let a = rxjs.of(1, 2, 3)
console.log(a)

// const button = document.querySelector('button');
// fromEvent(button, 'click')
//   .subscribe(() => console.log('Clicked!'));