import {clickAndPrint} from '../../utils/events'
import { fromEvent } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  // elem ref
  const searchBox = document.getElementById('search');

  // streams
  const keyup$ = fromEvent(searchBox, 'keyup');

  // wait .5s between keyups to emit current value
  keyup$
    .pipe(
      map((i) => i.currentTarget.value),
      debounceTime(500)
    )
    .subscribe(print);
});
