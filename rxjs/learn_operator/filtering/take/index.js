import {clickAndPrint} from '../../utils/events'
import { of, interval, fromEvent } from 'rxjs';
import { take, tap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit 1,2,3,4,5
  const source = of(1, 2, 3, 4, 5);
  //take the first emitted value then complete
  const example = source.pipe(take(1));
  //output: 1
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  //emit value every 1s
  const interval$ = interval(1000);
  //take the first 5 emitted values
  const example = interval$.pipe(take(5));
  //output: 0,1,2,3,4
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn3', '#demo3', print => {
  const oneClickEvent = fromEvent(document, 'click').pipe(
    take(1),
    tap(v => {
      document.getElementById(
        'locationDisplay'
      ).innerHTML = `Your first click was on location ${v.screenX}:${v.screenY}`;
    })
  );

  const subscribe = oneClickEvent.subscribe(print);
});
