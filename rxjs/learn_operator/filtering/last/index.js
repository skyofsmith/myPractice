import {clickAndPrint} from '../../utils/events'
import { from } from 'rxjs';
import { last } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const source = from([1, 2, 3, 4, 5]);
  //no arguments, emit last value
  const example = source.pipe(last());
  //output: "Last value: 5"
  const subscribe = example.subscribe(val => print(`Last value: ${val}`));
});

clickAndPrint('#btn2', '#demo2', print => {
  const source = from([1, 2, 3, 4, 5]);
  //emit last even number
  const exampleTwo = source.pipe(last(num => num % 2 === 0));
  //output: "Last to pass test: 4"
  const subscribeTwo = exampleTwo.subscribe(val =>
    print(`Last to pass test: ${val}`)
  );
});

clickAndPrint('#btn3', '#demo3', print => {
  const source = from([1, 2, 3, 4, 5]);
  //no values will pass given predicate, emit default
  const exampleTwo = source.pipe(last(v => v > 5, 'Nothing!'));
  //output: 'Nothing!'
  const subscribeTwo = exampleTwo.subscribe(val => print(val));
});