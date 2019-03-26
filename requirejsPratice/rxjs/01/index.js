import * as rxjs from 'rxjs'

console.log(rxjs);
const { fromEvent } = rxjs;

rxjs.of(1, 2, 3)

// const button = document.querySelector('button');
// fromEvent(button, 'click')
//   .subscribe(() => console.log('Clicked!'));