import {clickAndPrint} from '../../utils/events'
import { interval, fromEvent } from 'rxjs';
import { buffer, filter, throttleTime } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  // streams
  const clicks$ = fromEvent(document, 'click');

  /*
  Collect clicks that occur, after 250ms emit array of clicks
  */
  clicks$
    .pipe(
      buffer(clicks$.pipe(throttleTime(250))),
      // if array is greater than 1, double click occured
      filter(clickArray => {
        print(clickArray)
        return clickArray.length > 1
      })
    )
    .subscribe(() => print('Double Click!'));
});

clickAndPrint('#btn2', '#demo2', print => {
//Create an observable that emits a value every second
  const myInterval = interval(1000);
//Create an observable that emits every time document is clicked
  const bufferBy = fromEvent(document, 'click');
  /*
  Collect all values emitted by our interval observable until we click document. This will cause the bufferBy Observable to emit a value, satisfying the buffer. Pass us all collected values since last buffer as an array.
  */
  const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
//Print values to console
//ex. output: [1,2,3] ... [4,5,6,7,8]
  const subscribe = myBufferedInterval.subscribe(val =>
    print(`Buffered Values: , ${val}`)
  );
});
