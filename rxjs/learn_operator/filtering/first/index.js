import {clickAndPrint} from '../../utils/events'
import { from } from 'rxjs';
import { first } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const source = from([1, 2, 3, 4, 5]);
  //no arguments, emit first value
  const example = source.pipe(first());
  //output: "First value: 1"
  const subscribe = example.subscribe(val => print(`First value: ${val}`));
});

clickAndPrint('#btn2', '#demo2', print => {
  const source = from([1, 2, 3, 4, 5]);
  //emit first item to pass test
  const example = source.pipe(first(num => num === 5));
  //output: "First to pass test: 5"
  const subscribe = example.subscribe(val =>
    print(`First to pass test: ${val}`)
  );
});

clickAndPrint('#btn3', '#demo3', print => {
  const source = from([1, 2, 3, 4, 5]);
  //no value will pass, emit default
  const example = source.pipe(first(val => val > 5, 'Nothing'));
  //output: 'Nothing'
  const subscribe = example.subscribe(val => print(val));
});
