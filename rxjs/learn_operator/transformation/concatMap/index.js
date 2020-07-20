import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';
import { concatMap, delay, mergeMap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit delay value
  const source = of(2000, 1000);
  // map value from source into inner observable, when complete emit result and move to next
  const example = source.pipe(
    concatMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
  );
  //output: With concatMap: Delayed by: 2000ms, With concatMap: Delayed by: 1000ms
  const subscribe = example.subscribe(val =>
    print(`With concatMap: ${val}`)
  );
  
  // showing the difference between concatMap and mergeMap
  const mergeMapExample = source
    .pipe(
      // just so we can log this after the first example has run
      delay(5000),
      mergeMap(val => of(`Delayed by: ${val}ms`).pipe(delay(val)))
    )
    .subscribe(val => print(`With mergeMap: ${val}`));
});

clickAndPrint('#btn2', '#demo2', print => {
  //emit 'Hello' and 'Goodbye'
  const source = of('Hello', 'Goodbye');
  //example with promise
  const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
  // map value from source into inner observable, when complete emit result and move to next
  const example = source.pipe(concatMap(val => examplePromise(val)));
  //output: 'Example w/ Promise: 'Hello World', Example w/ Promise: 'Goodbye World'
  const subscribe = example.subscribe(val =>
    print(`Example w/ Promise:, ${val}`)
  );
});

clickAndPrint('#btn3', '#demo3', print => {
  //emit 'Hello' and 'Goodbye'
  const source = of('Hello', 'Goodbye');
  //example with promise
  const examplePromise = val => new Promise(resolve => resolve(`${val} World!`));
  //result of first param passed to second param selector function before being  returned
  const example = source.pipe(
    concatMap(
      val => examplePromise(val),
      result => `${result} w/ selector!`
    )
  );
  //output: 'Example w/ Selector: 'Hello w/ Selector', Example w/ Selector: 'Goodbye w/ Selector'
  const subscribe = example.subscribe(val =>
    print(`Example w/ Selector:, ${val}`)
  );

});