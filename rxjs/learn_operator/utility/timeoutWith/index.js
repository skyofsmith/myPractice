import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';
import { timeoutWith, delay, concatMap } from 'rxjs/operators';
clickAndPrint('#btn1', '#demo1', print => {
  const fakeRequest = delayTime => of('!response!').pipe(delay(delayTime));
  const requestTimeoutLogger = of('logging request timeout');
  const timeoutThreshold = 1000;

  of(timeoutThreshold + 1, timeoutThreshold - 1, timeoutThreshold + 3)
    .pipe(
      concatMap(e =>
        fakeRequest(e).pipe(timeoutWith(timeoutThreshold, requestTimeoutLogger))
      )
    )
    .subscribe(print);
  /*
    OUTPUT:
      logging request timeout
      !response!
      logging request timeout
  */
});