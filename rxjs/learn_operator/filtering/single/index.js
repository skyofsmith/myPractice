import {clickAndPrint} from '../../utils/events'
import { from } from 'rxjs';
import { single } from 'rxjs/operators';
clickAndPrint('#btn1', '#demo1', print => {
  //emit (1,2,3,4,5)
  const source = from([1, 2, 3, 4, 5]);
  //emit one item that matches predicate
  const example = source.pipe(single(val => val === 4));
  //output: 4
  const subscribe = example.subscribe(val => print(val));
});