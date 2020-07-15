import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';
import { concatMap, timeout, catchError, delay } from 'rxjs/operators';
clickAndPrint('#btn1', '#demo1', print => {
  // simulate request
  function makeRequest(timeToDelay) {
    return of('Request Complete!').pipe(delay(timeToDelay));
  }
  
  of(4000, 3000, 2000)
    .pipe(
      concatMap(duration =>
        makeRequest(duration).pipe(
          timeout(2500),
          catchError(error => of(`Request timed out after: ${duration}`))
        )
      )
    )
    /*
     *  "Request timed out after: 4000"
     *  "Request timed out after: 3000"
     *  "Request Complete!"
     */
    .subscribe(val => print(val));
});