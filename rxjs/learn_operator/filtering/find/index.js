import {clickAndPrint} from '../../utils/events'
import { fromEvent } from 'rxjs';
import { find, repeatWhen, mapTo, startWith, filter } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  // elem ref
  const status = document.getElementById('status');
  
  // streams
  const clicks$ = fromEvent(document, 'click');
  
  clicks$
    .pipe(
      find((event) => event.target.id === 'box'),
      mapTo('Found!'),
      startWith('Find me!'),
      // reset when click outside box
      repeatWhen(() =>
        clicks$.pipe(filter((event) => event.target.id !== 'box'))
      )
    )
    .subscribe(message => (status.innerHTML = message));
});