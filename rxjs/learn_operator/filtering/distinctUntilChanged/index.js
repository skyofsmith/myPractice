import {clickAndPrint} from '../../utils/events'
import { from } from 'rxjs';
import { distinctUntilChanged, tap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  // only output distinct values, based on the last emitted value
  const source$ = from([1, 1, 2, 2, 3, 3, 1, 2, 3]);

  source$
    .pipe(
      tap(v => {
        print(`come: ${v}`)
      }),
      distinctUntilChanged()
    )
    // output: 1,2,3
    .subscribe(print);
});



clickAndPrint('#btn2', '#demo2', print => {
  const sampleObject = { name: 'Test' };

  //Objects must be same reference
  const source$ = from([sampleObject, sampleObject, sampleObject]);

  // only emit distinct objects, based on last emitted value
  source$
    .pipe(
      tap(v => {
        print(`come: ${v}`)
      }),
      distinctUntilChanged()
    )
    // output: {name: 'Test'}
    .subscribe(print);
});


clickAndPrint('#btn3', '#demo3', print => {
  // only output distinct values, based on the last emitted value
  const source$ = from([
    { name: 'Brian' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'Sue' },
    { name: 'Joe' },
    { name: 'Brian' }
  ]);

  source$
    // custom compare for name
    .pipe(distinctUntilChanged((prev, curr) => prev.name === curr.name))
    // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
    .subscribe(print);
});