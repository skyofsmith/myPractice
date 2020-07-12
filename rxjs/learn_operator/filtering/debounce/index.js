import {clickAndPrint} from '../../utils/events'
import { of, timer, interval } from 'rxjs';
import { debounce, tap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit four strings
  const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');
  /*
      Only emit values after a second has passed between the last emission,
      throw away all other values
  */
  const debouncedExample = example.pipe(
    tap(v => {
      print(`tap: ${v}`)
    }),
    debounce(() => timer(1000))
  );
  /*
      In this example, all values but the last will be omitted
      output: 'Last will display'
  */
  const subscribe = debouncedExample.subscribe(val => {
    print(val)
  });
});


clickAndPrint('#btn2', '#demo2', print => {
  //emit value every 1 second, ex. 0...1...2
  const interval$ = interval(1000);
  //raise the debounce time by 200ms each second
  const debouncedInterval = interval$.pipe(
    tap(v => {
      print(`tap: ${v}`)
    }),
    debounce(val => timer(val * 200))
  );
  /*
    After 5 seconds, debounce time will be greater than interval time,
    all future values will be thrown away
    output: 0...1...2...3...4......(debounce time over 1s, no values emitted)
  */
  const subscribe = debouncedInterval.subscribe(val =>
    print(`Example Two: ${val}`)
  );
});
