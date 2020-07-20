import {clickAndPrint} from '../../utils/events'
import { of, interval } from 'rxjs';
import { concatMapTo, delay, take } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value every 2 seconds
  const sampleInterval = interval(500).pipe(take(5));
  const fakeRequest = of('Network request complete').pipe(delay(3000));
  //wait for first to complete before next is subscribed
  const example = sampleInterval.pipe(concatMapTo(fakeRequest));
  //result
  //output: Network request complete...3s...Network request complete'
  const subscribe = example.subscribe(val => print(val));
});


clickAndPrint('#btn2', '#demo2', print => {
  //emit value every 2 seconds
  const interval$ = interval(2000);
  //emit value every second for 5 seconds
  const source = interval(1000).pipe(take(5));
  /*
    ***Be Careful***: In situations like this where the source emits at a faster pace
    than the inner observable completes, memory issues can arise.
    (interval emits every 1 second, basicTimer completes every 5)
  */
  // basicTimer will complete after 5 seconds, emitting 0,1,2,3,4
  const example = interval$.pipe(
    concatMapTo(
      source,
      (firstInterval, secondInterval) => `${firstInterval} ${secondInterval}`
    )
  );
  /*
    output: 0 0
            0 1
            0 2
            0 3
            0 4
            1 0
            1 1
            continued...
  ​
  */
  const subscribe = example.subscribe(val => print(val));
});