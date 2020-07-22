import {clickAndPrint} from '../../utils/events'
import { interval, merge, of } from 'rxjs';
import { delay, take, exhaustMap, tap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const sourceInterval = interval(1000);
  const delayedInterval = sourceInterval.pipe(delay(10), take(4));
  
  const exhaustSub = merge(
    // delay 10ms, then start interval emitting 4 values
    delayedInterval,
    // emit immediately
    of(true)
  )
    .pipe(exhaustMap(_ => sourceInterval.pipe(take(5))))
    /*
     *  The first emitted value (of(true)) will be mapped
     *  to an interval observable emitting 1 value every
     *  second, completing after 5.
     *  Because the emissions from the delayed interval
     *  fall while this observable is still active they will be ignored.
     *
     *  Contrast this with concatMap which would queue,
     *  switchMap which would switch to a new inner observable each emission,
     *  and mergeMap which would maintain a new subscription for each emitted value.
     */
    // output: 0, 1, 2, 3, 4
    .subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  const firstInterval = interval(1000).pipe(take(10));
  const secondInterval = interval(1000).pipe(take(2));

  const exhaustSub = firstInterval
    .pipe(
      exhaustMap(f => {
        print(`Emission Corrected of first interval: ${f}`);
        return secondInterval;
      })
    )
    /*
      When we subscribed to the first interval, it starts to emit a values (starting 0).
      This value is mapped to the second interval which then begins to emit (starting 0).  
      While the second interval is active, values from the first interval are ignored.
      We can see this when firstInterval emits number 3,6, and so on...

        Output:
        Emission of first interval: 0
        0
        1
        Emission of first interval: 3
        0
        1
        Emission of first interval: 6
        0
        1
        Emission of first interval: 9
        0
        1
    */
    .subscribe(s => print(s));
});