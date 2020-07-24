import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';
import { reduce } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const source = of(1, 2, 3, 4);
  const example = source.pipe(reduce((acc, val) => acc + val));
  //output: Sum: 10'
  const subscribe = example.subscribe(val => print(`Sum: ${val}`));
})