import Rx from 'rxjs/Rx'

console.log(Rx)

var btn1 = document.getElementById('btn1')
btn1.addEventListener('click', function () {
  console.log('Clicked!')
})

var btn2 = document.getElementById('btn2')
Rx.Observable.fromEvent(btn2, 'click').subscribe(() => console.log('Clicked!'))
