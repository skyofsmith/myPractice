import {clickAndPrint} from '../../utils/events'
import { fromEvent } from 'rxjs';
import { timeInterval, tap } from 'rxjs/operators';
clickAndPrint('#btn1', '#demo1', print => {
  fromEvent(document, 'mousedown')
    .pipe(timeInterval(), tap(print))
    .subscribe(
      i => print(`milliseconds since last click: ${i.interval}`)
    );
});