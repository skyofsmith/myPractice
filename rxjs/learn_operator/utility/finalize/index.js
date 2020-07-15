import {clickAndPrint} from '../../utils/events'
import { interval } from 'rxjs';
import { take, finalize, endWith } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value in sequence every 1 second
  const source = interval(1000);
  //output: 0,1,2,3,4,5....
  const example = source.pipe(
    //take only the first 5 values
    take(5),
    // Execute when the observable completes
    finalize(() => {
      print('Sequence complete')
      return 'complete'
    }),
    endWith(10)
  )
  const subscribe = example.subscribe(val => print(val));
});
