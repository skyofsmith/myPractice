import * as rxjs from 'rxjs'
import { Observable, fromEvent } from 'rxjs'
import { scan } from 'rxjs/operators'

console.log(rxjs)

var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function() {
  console.log('Clicked!')
})

var btn2 = document.getElementById('btn2')
fromEvent(btn2, 'click').subscribe(() => console.log('Clicked!'))

var count = 0
var btn3 = document.getElementById('btn3')
btn3.addEventListener('click', () => console.log(`Clicked ${++count} times`))

const btn4 = document.getElementById('btn4')
fromEvent(btn4, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`))
