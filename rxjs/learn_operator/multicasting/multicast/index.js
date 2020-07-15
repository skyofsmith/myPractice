import {clickAndPrint} from '../../utils/events'
import { Subject, interval, ReplaySubject } from 'rxjs';
import { take, tap, multicast, mapTo } from 'rxjs/operators';


clickAndPrint('#btn1', '#demo1', print => {
  //emit every 2 seconds, take 5
  const source = interval(2000).pipe(take(5));
  
  const example = source.pipe(
    //since we are multicasting below, side effects will be executed once
    tap(() => print('Side Effect #1')),
    mapTo('Result!')
  );
  
  //subscribe subject to source upon connect()
  const multi = example.pipe(multicast(() => new Subject()));
  /*
    subscribers will share source
    output:
    "Side Effect #1"
    "Result!"
    "Result!"
    ...
  */
  const subscriberOne = multi.subscribe(val => print(`One: ${val}`));
  const subscriberTwo = multi.subscribe(val => print(`Two: ${val}`));
  //subscribe subject to source
  multi.connect();
});

clickAndPrint('#btn2', '#demo2', print => {
  //emit every 2 seconds, take 5
  const source = interval(2000).pipe(take(5));

  //example with ReplaySubject
  const example = source.pipe(
    //since we are multicasting below, side effects will be executed once
    tap(_ => print('Side Effect #2')),
    mapTo('Result Two!')
  );
  //can use any type of subject
  const multi = example.pipe(multicast(() => new ReplaySubject(5)));
  //subscribe subject to source
  multi.connect();

  setTimeout(() => {
    /*
    subscriber will receieve all previous values on subscription because
    of ReplaySubject
    */
    const subscriber = multi.subscribe(val => print(val));
  }, 5000);
});