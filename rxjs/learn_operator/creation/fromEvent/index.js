import {clickAndPrint} from '../../utils/events'
import { fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
    //create observable that emits click events
    const source = fromEvent(document, 'click');
    //map to string with given event timestamp
    const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
    //output (example): 'Event time: 7276.390000000001'
    const subscribe = example.subscribe(print);
});
