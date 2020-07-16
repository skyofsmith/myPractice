import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';
import { takeLast } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const source = of('Ignore', 'Ignore', 'Hello', 'World!');
  // take the last 2 emitted values
  const example = source.pipe(takeLast(2));
  // Hello, World!
  const subscribe = example.subscribe(val => print(val));
});
