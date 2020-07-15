import {clickAndPrint} from '../../utils/events'
import { from, fromEvent } from 'rxjs';
import { distinctUntilKeyChanged, pluck } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  // only output distinct values, based on the last emitted value
  const source$ = from([
    { name: 'Brian' },
    { name: 'Joe' },
    { name: 'Joe' },
    { name: 'Sue' },
    { name: 'Joe' }
  ]);
  source$
    // custom compare based on name property
    .pipe(distinctUntilKeyChanged('name'))
    // output: { name: 'Brian }, { name: 'Joe' }, { name: 'Sue' }
    .subscribe(print);
});



clickAndPrint('#btn2', '#demo2', print => {
  const keys$ = fromEvent(document, 'keyup').pipe(
    distinctUntilKeyChanged('code'),
    pluck('key')
  );

  keys$.subscribe(print);
});