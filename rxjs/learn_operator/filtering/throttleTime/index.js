import {clickAndPrint} from '../../utils/events'
import { throttleTime } from 'rxjs/operators';
import { interval, asyncScheduler } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
  // emit value every 1 second
  const source = interval(1000);
  /*
    emit the first value, then ignore for 5 seconds. repeat...
  */
  const example = source.pipe(throttleTime(5000));
  // output: 0...6...12
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  const source = interval(1000);
  /*
    emit the first value, then ignore for 5 seconds. repeat...
  */
  const example = source.pipe(
    throttleTime(5000, asyncScheduler, { trailing: true })
  );
  // output: 5...11...17
  const subscribe = example.subscribe(val => print(val));
});