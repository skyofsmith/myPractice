import {clickAndPrint} from '../../utils/events'
import { timer, interval, fromEvent, merge, empty } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  fromEvent(document, 'click')
    .pipe(
      // restart counter on every click
      switchMap(() => interval(1000))
    )
    .subscribe(print);
})

clickAndPrint('#btn2', '#demo2', print => {
  const COUNTDOWN_SECONDS = 10;

  // elem refs
  const remainingLabel = document.getElementById('remaining');
  const pauseButton = document.getElementById('pause');
  const resumeButton = document.getElementById('resume');

  // streams
  const interval$ = interval(1000).pipe(mapTo(-1));
  const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
  const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

  const timer$ = merge(pause$, resume$)
    .pipe(
      startWith(true),
      switchMap(val => (val ? interval$ : empty())),
      scan((acc, curr) => (curr ? curr + acc : acc), COUNTDOWN_SECONDS),
      takeWhile(v => v >= 0)
    )
    .subscribe((val) => {
      print(val)
      remainingLabel.innerHTML = val
    });
})

clickAndPrint('#btn3', '#demo3', print => {
  // switch to new inner observable when source emits, emit result of project function
  timer(0, 5000)
    .pipe(
      switchMap(
        _ => interval(2000),
        (outerValue, innerValue, outerIndex, innerIndex) => ({
          outerValue,
          innerValue,
          outerIndex,
          innerIndex
        })
      )
    )
    /*
      Output:
      {outerValue: 0, innerValue: 0, outerIndex: 0, innerIndex: 0}
      {outerValue: 0, innerValue: 1, outerIndex: 0, innerIndex: 1}
      {outerValue: 1, innerValue: 0, outerIndex: 1, innerIndex: 0}
      {outerValue: 1, innerValue: 1, outerIndex: 1, innerIndex: 1}
  */
    .subscribe(print);
})