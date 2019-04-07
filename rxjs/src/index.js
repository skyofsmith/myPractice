import * as rxjs from 'rxjs'
import { Observable, fromEvent } from 'rxjs'

console.log(rxjs)

var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function() {
  console.log('Clicked!')
})

var btn2 = document.getElementById('btn2')
fromEvent(btn2, 'click')
  .subscribe(() => console.log('Clicked!'))

var count = 0;
var btn3 = document.getElementById('btn3');
btn3.addEventListener('click', () => console.log(`Clicked ${++count} times`));

