import {clickAndPrint} from '../../utils/events'
import { interval, timer, fromEvent } from 'rxjs';
import { takeUntil, filter, scan, map, withLatestFrom, mergeMap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value every 1s
  const source = interval(1000);
  //after 5 seconds, emit value
  const timer$ = timer(5000);
  //when timer emits after 5s, complete source
  const example = source.pipe(takeUntil(timer$));
  //output: 0,1,2,3
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  //emit value every 1s
  const source = interval(1000);
  //is number even?
  const isEven = val => val % 2 === 0;
  //only allow values that are even
  const evenSource = source.pipe(filter(isEven));
  //keep a running total of the number of even numbers out
  const evenNumberCount = evenSource.pipe(scan((acc, _) => acc + 1, 0));
  //do not emit until 5 even numbers have been emitted
  const fiveEvenNumbers = evenNumberCount.pipe(filter(val => val > 5));

  const example = evenSource.pipe(
    //also give me the current even number count for display
    withLatestFrom(evenNumberCount),
    map(([val, count]) => `Even number (${count}) : ${val}`),
    //when five even numbers have been emitted, complete source observable
    takeUntil(fiveEvenNumbers)
  );
  /*
      Even number (1) : 0,
      Even number (2) : 2
      Even number (3) : 4
      Even number (4) : 6
      Even number (5) : 8
  */
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn3', '#demo3', print => {
  const mousedown$ = fromEvent(document, 'mousedown');
  const mouseup$ = fromEvent(document, 'mouseup');
  const mousemove$ = fromEvent(document, 'mousemove');

  // after mousedown, take position until mouse up
  mousedown$
    .pipe(
      mergeMap(_ => {
        return mousemove$.pipe(
          map((e) => ({
            x: e.clientX,
            y: e.clientY
          })),
          // complete inner observable on mouseup event
          takeUntil(mouseup$)
        );
      })
    )
    .subscribe(print);
});