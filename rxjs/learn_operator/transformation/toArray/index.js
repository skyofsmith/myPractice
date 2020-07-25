import {clickAndPrint} from '../../utils/events'
import { interval } from 'rxjs';
import { toArray, take } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  interval(100)
    .pipe(take(10), toArray())
    .subscribe(print);
  // output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
})
