import {clickAndPrint} from '../../utils/events'
import { interval, from } from 'rxjs';
import { skip, filter } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit every 1s
  const source = interval(1000);
  //skip the first 5 emitted values
  const example = source.pipe(skip(5));
  //output: 5...6...7...8........
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  const numArrayObs = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  // 3,4,5...
  const skipObs = numArrayObs.pipe(skip(2)).subscribe(print);

  // 3,4,5...
  const filterObs = numArrayObs
    .pipe(filter((val, index) => index > 1))
    .subscribe(print);
  //Same output!
});