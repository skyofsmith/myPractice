import {clickAndPrint} from '../../utils/events'
import { interval, throwError, of } from 'rxjs';
import { take, ignoreElements, mergeMap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value every 100ms
  const source = interval(100);
  //ignore everything but complete
  const example = source.pipe(take(5), ignoreElements());
  //output: "COMPLETE!"
  const subscribe = example.subscribe(
    val => print(`NEXT: ${val}`),
    val => print(`ERROR: ${val}`),
    () => print('COMPLETE!')
  );
});



clickAndPrint('#btn2', '#demo2', print => {
  //emit value every 100ms
  const source = interval(100);
  //ignore everything but error
  const error = source.pipe(
    mergeMap(val => {
      if (val === 4) {
        return throwError(`ERROR AT ${val}`);
      }
      return of(val);
    }),
    ignoreElements()
  );
  //output: "ERROR: ERROR AT 4"
  const subscribe = error.subscribe(
    val => print(`NEXT: ${val}`),
    val => print(`ERROR: ${val}`),
    () => print('SECOND COMPLETE!')
  );
});
