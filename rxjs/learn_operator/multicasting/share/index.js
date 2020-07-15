import {clickAndPrint} from '../../utils/events'
import { timer } from 'rxjs';
import { tap, mapTo, share } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value in 1s
  const source = timer(1000);
  //log side effect, emit result
  const example = source.pipe(
    tap(() => print('***SIDE EFFECT***')),
    mapTo('***RESULT***')
  );
  
  /*
    ***NOT SHARED, SIDE EFFECT WILL BE EXECUTED TWICE***
    output:
    "***SIDE EFFECT***"
    "***RESULT***"
    "***SIDE EFFECT***"
    "***RESULT***"
  */
  const subscribe = example.subscribe(val => print(val));
  const subscribeTwo = example.subscribe(val => print(val));
  
  //share observable among subscribers
  const sharedExample = example.pipe(share());
  /*
    ***SHARED, SIDE EFFECT EXECUTED ONCE***
    output:
    "***SIDE EFFECT***"
    "***RESULT***"
    "***RESULT***"
  */
  const subscribeThree = sharedExample.subscribe(val => print(val));
  const subscribeFour = sharedExample.subscribe(val => print(val));
});