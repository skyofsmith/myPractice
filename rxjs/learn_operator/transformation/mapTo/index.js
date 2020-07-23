import {clickAndPrint} from '../../utils/events'
import { interval, fromEvent } from 'rxjs';
import { mapTo } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value every two seconds
  const source = interval(2000);
  //map all emissions to one value
  const example = source.pipe(mapTo('HELLO WORLD!'));
  //output: 'HELLO WORLD!'...'HELLO WORLD!'...'HELLO WORLD!'...
  const subscribe = example.subscribe(val => print(val));
})

clickAndPrint('#btn2', '#demo2', print => {
  //emit every click on document
  const source = fromEvent(document, 'click');
  //map all emissions to one value
  const example = source.pipe(mapTo('GOODBYE WORLD!'));
  //output: (click)'GOODBYE WORLD!'...
  const subscribe = example.subscribe(val => print(val));
})