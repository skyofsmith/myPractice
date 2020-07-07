import {clickAndPrint} from '../../utils/events'
import { range } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
    //emit 1-10 in sequence
    const source = range(1, 10);
    //output: 1,2,3,4,5,6,7,8,9,10
    const example = source.subscribe(print);
});
