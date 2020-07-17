import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';
import { takeWhile, filter } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit 1,2,3,4,5
  const source$ = of(1, 2, 3, 4, 5);
  //allow values until value from source is greater than 4, then complete
  source$
    .pipe(takeWhile(val => val <= 4))
    // log: 1,2,3,4
    .subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  const source$ = of(1, 2, 3, 9, 11, 13);
  source$
    // with inclusive flag, the value causing the predicate to return false will also be emitted
    .pipe(takeWhile(val => val <= 3, true))
    // log: 1, 2, 3, 9
    .subscribe(print);
});

clickAndPrint('#btn3', '#demo3', print => {
  // emit 3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3
  const source$ = of(3, 3, 3, 9, 1, 4, 5, 8, 96, 3, 66, 3, 3, 3);
  // allow values until value from source equals 3, then complete
  source$
    .pipe(takeWhile(it => it === 3))
    // log: 3, 3, 3
    .subscribe(val => print('takeWhile', val));
  source$
    .pipe(filter(it => it === 3))
    // log: 3, 3, 3, 3, 3, 3, 3
    .subscribe(val => print('filter', val));
});