import {clickAndPrint} from '../../utils/events'
import { interval } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
    //emit value in sequence every 1 second
    const source = interval(1000);
    //output: 0,1,2,3,4,5....
    const subscribe = source.subscribe(print);
});
