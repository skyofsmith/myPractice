import {clickAndPrint} from '../../utils/events'
import { timer, interval } from 'rxjs';
import { window, scan, mergeAll } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {

  //emit immediately then every 1s
  const source = timer(0, 1000);
  const example = source.pipe(window(interval(3000)));
  const count = example.pipe(scan((acc, curr) => acc + 1, 0));
  /*
    "Window 1:"
    0
    1
    2
    "Window 2:"
    3
    4
    5
    ...
  */
  const subscribe = count.subscribe(val => print(`Window ${val}:`));
  const subscribeTwo = example
    .pipe(mergeAll())
    .subscribe(val => print(val));
});
