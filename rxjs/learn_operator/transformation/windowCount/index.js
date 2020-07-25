import {clickAndPrint} from '../../utils/events'
import { interval } from 'rxjs';
import { windowCount, mergeAll, tap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit every 1s
  const source = interval(1000);
  const example = source.pipe(
    //start new window every 4 emitted values
    windowCount(4),
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
              "NEW WINDOW!"
              4
              5
              6
              7
            */
    )
    .subscribe(val => print(val));
});
