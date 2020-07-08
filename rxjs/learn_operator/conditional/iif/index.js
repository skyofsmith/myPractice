import {clickAndPrint} from '../../utils/events'
import { iif, of, interval, fromEvent } from 'rxjs';
import { mergeMap, map, throttleTime, filter } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const r$ = of('R');
  const x$ = of('X');
  interval(1000)
    .pipe(mergeMap(v => iif(() => v % 4 === 0, r$, x$)))
    .subscribe(print);

  // output: R, X, X, X, R, X, X, X, etc...
});


clickAndPrint('#btn2', '#demo2', print => {
  const r$ = of(`I'm saying R!!`);
  const x$ = of(`X's always win!!`);

  fromEvent(document, 'mousemove')
    .pipe(
      throttleTime(50),
      filter((move) => move.clientY < 210),
      map((move) => move.clientY),
      mergeMap(yCoord => iif(() => yCoord < 110, r$, x$))
    )
    .subscribe(print);
});

clickAndPrint('#btn3', '#demo3', print => {
  interval(1000)
    .pipe(
      mergeMap(v =>
        iif(
          () => !!(v % 2),
          of(v)
          // if not supplied defaults to EMPTY
        )
      )
      // output: 1,3,5...
    )
    .subscribe(print);
});
