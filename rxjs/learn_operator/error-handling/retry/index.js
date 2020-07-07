import {interval, of, throwError} from 'rxjs';
import { mergeMap, retry } from 'rxjs/operator';

​
import {clickAndPrint} from '../../utils/events';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value every 1s
  const source = interval(1000);
  const example = source.pipe(
    mergeMap(val => {
      //throw error for demonstration
      if (val > 5) {
        return throwError('Error!');
      }
      return of(val);
    }),
    //retry 2 times on error
    retry(2)
  );
  /*
    output:
    0..1..2..3..4..5..
    0..1..2..3..4..5..
    0..1..2..3..4..5..
    "Error!: Retried 2 times then quit!"
  */
  const subscribe = example.subscribe({
    next: val => print(val),
    error: val => print(`${val}: Retried 2 times then quit!`)
  });
});
