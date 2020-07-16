import {clickAndPrint} from '../../utils/events'
import { interval } from 'rxjs';
import { skipWhile } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1' , print => {
  //emit every 1s
  const source = interval(1000);
  //skip emitted values from source while value is less than 5
  const example = source.pipe(skipWhile(val => val < 5));
  //output: 5...6...7...8........
  const subscribe = example.subscribe(val => print(val));
  const subscribe2 = example.subscribe(val => print(val));
});