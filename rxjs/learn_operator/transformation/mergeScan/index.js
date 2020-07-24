import {clickAndPrint} from '../../utils/events'
import { fromEvent, interval, of } from 'rxjs';
import { mergeScan, take, takeUntil, map, scan } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  // reference
  const durationElem = document.getElementById('duration');
  
  // streams
  const mouseDown$ = fromEvent(document, 'mousedown');
  const mouseUp$ = fromEvent(document, 'mouseup');
  
  // accumulate time mouse held down over time
  mouseDown$
    .pipe(
      mergeScan((acc, curr) => {
        return interval(1000).pipe(
          scan((a, _) => ++a, 0),
          map((val) => val + acc),
          takeUntil(mouseUp$)
        );
      }, 0)
      // output: 1s...2s...3s...4s...
    )
    .subscribe(val => {
      print(val)
      durationElem.innerHTML = `${val}s`
    });
});


// ~function() {
//   const interval$ = interval(1000)

//   const res = interval$.pipe(
//     mergeScan((acc, cur) => {
//       console.log('mergeScan', acc, cur)
//       return of(acc + cur)
//     }, 0)
//   )
//   res.subscribe(v => {
//     console.log(`res: ${v}`)
//   })
// }()