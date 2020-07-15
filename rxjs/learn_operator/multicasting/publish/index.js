import {clickAndPrint} from '../../utils/events'
import { interval } from 'rxjs';
import { publish, tap, take } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value every 1 second
  const source = interval(1000);
  const example = source.pipe(
    take(5),
    //side effects will be executed once
    tap(_ => print('Do Something!')),
    //do nothing until connect() is called
    publish()
  );
  
  /*
    source will not emit values until connect() is called
    output: (after 5s)
    "Do Something!"
    "Subscriber One: 0"
    "Subscriber Two: 0"
    "Do Something!"
    "Subscriber One: 1"
    "Subscriber Two: 1"
  */
  const subscribe = example.subscribe(val =>
    print(`Subscriber One: ${val}`)
  );
  const subscribeTwo = example.subscribe(val =>
    print(`Subscriber Two: ${val}`)
  );

  //call connect after 5 seconds, causing source to begin emitting items
  setTimeout(() => {
    example.connect();
  }, 1000);
});