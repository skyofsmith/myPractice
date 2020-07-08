import {clickAndPrint} from '../../utils/events'
import { from, fromEvent } from 'rxjs';
import { sequenceEqual, map, bufferCount, mergeMap, tap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const expectedSequence = from([4, 5, 6]);

  of([1, 2, 3], [4, 5, 6], [7, 8, 9])
    .pipe(switchMap(arr => from(arr).pipe(sequenceEqual(expectedSequence))))
    .subscribe(print);
  //output: false, true, false
});

clickAndPrint('#btn2', '#demo2', print => {

  const expectedSequence = from(['q', 'w', 'e', 'r', 't', 'y']);
  const setResult = text => (document.getElementById('result').innerText = text);

  fromEvent(document, 'keydown')
    .pipe(
      map((e) => e.key),
      tap(v => setResult(v)),
      bufferCount(6),
      mergeMap(keyDowns =>
        from(keyDowns).pipe(
          sequenceEqual(expectedSequence),
          tap(isItQwerty => setResult(isItQwerty ? 'WELL DONE!' : 'TYPE AGAIN!'))
        )
      )
    )
    .subscribe(e => print(`did you say qwerty? ${e}`));
});