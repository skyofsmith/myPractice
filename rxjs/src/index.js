import * as rxjs from 'rxjs'
import { fromEvent } from 'rxjs'
import { throttleTime, map, scan } from 'rxjs/operators'

console.log(rxjs)

var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function() {
  console.log('Clicked!')
})

var btn2 = document.getElementById('btn2')
fromEvent(btn2, 'click').subscribe(() => console.log('Clicked!'))

// 纯净性 (Purity)
var count = 0
var btn3 = document.getElementById('btn3')
btn3.addEventListener('click', () => console.log(`Clicked ${++count} times`))

const btn4 = document.getElementById('btn4')
fromEvent(btn4, 'click')
  .pipe(scan(count => count + 1, 0))
  .subscribe(count => console.log(`Clicked ${count} times`))

// 流动性 (Flow)

var count = 0
var rate = 1000
var lastClick = Date.now() - rate
var btn5 = document.getElementById('btn5')
btn5.addEventListener('click', () => {
  if (Date.now() - lastClick >= rate) {
    console.log(`Clicked ${++count} times`)
    lastClick = Date.now()
  }
})

var btn6 = document.getElementById('btn6')
fromEvent(btn6, 'click')
  .pipe(
    throttleTime(1000),
    scan(count => count + 1, 0)
  )
  .subscribe(count => console.log(`Clicked ${count} times`))

// Values

let count7 = 0
const rate7 = 1000
let lastClick7 = Date.now() - rate7
const btn7 = document.getElementById('btn7')
btn7.addEventListener('click', event => {
  if (Date.now() - lastClick >= rate7) {
    count7 += event.clientX
    console.log(count7)
    lastClick = Date.now()
  }
})

const btn8 = document.getElementById('btn8');
fromEvent(btn8, 'click').pipe(
  throttleTime(1000),
  map(event => event.clientX),
  scan((count, clientX) => count + clientX, 0)
)
.subscribe(count => console.log(count));