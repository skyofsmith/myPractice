import {clickAndPrint} from '../../utils/events'
import { repeat, delay } from 'rxjs/operators';
import { of } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
  const delayedThing = of('delayed value').pipe(delay(2000));
  delayedThing
    .pipe(repeat(3))
    // delayed value...delayed value...delayed value
    .subscribe(print);
});