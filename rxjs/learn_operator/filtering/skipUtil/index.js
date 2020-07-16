import {clickAndPrint} from '../../utils/events'
import { interval, timer } from 'rxjs';
import { skipUntil } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit every 1s
  const source = interval(1000);
  //skip emitted values from source until inner observable emits (6s)
  const example = source.pipe(skipUntil(timer(6000)));
  //output: 5...6...7...8........
  const subscribe = example.subscribe(val => print(val));
});