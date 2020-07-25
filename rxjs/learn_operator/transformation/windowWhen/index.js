import {clickAndPrint} from '../../utils/events'
import { interval, timer } from 'rxjs';
import { windowWhen, tap, mergeAll } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit immediately then every 1s
  const source = timer(0, 1000);
  const example = source.pipe(
    //close window every 5s and emit observable of collected values from source
    windowWhen(() => interval(5000)),
    tap(_ => print('NEW WINDOW!'))
  );

  const subscribeTwo = example
    .pipe(
      //window emits nested observable
      mergeAll()
      /*
        output:
        "NEW WINDOW!"
        0
        1
        2
        3
        4
        "NEW WINDOW!"
        5
        6
        7
        8
        9
      */
    )
    .subscribe(val => print(val));
});
