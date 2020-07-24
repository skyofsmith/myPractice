import {clickAndPrint} from '../../utils/events'
import { interval, fromEvent } from 'rxjs';
import {
  switchMapTo,
  scan,
  startWith,
  takeWhile,
  finalize
} from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const COUNTDOWN_TIME = 10;

  // reference
  const countdownElem = document.getElementById('countdown');

  // streams
  const click$ = fromEvent(document, 'click');
  const countdown$ = interval(1000).pipe(
    scan((acc, _) => --acc, COUNTDOWN_TIME),
    startWith(COUNTDOWN_TIME)
  );

  click$
    .pipe(
      switchMapTo(countdown$),
      takeWhile(val => val >= 0),
      finalize(() => {
        print("We're done here!")
        countdownElem.innerHTML = "We're done here!"
      })
    )
    .subscribe((val) => {
      print(val)
      countdownElem.innerHTML = val
    });
})