import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
    //emits any number of provided values in sequence
    const source = of(1, 2, 3, 4, 5);
    //output: 1,2,3,4,5
    const subscribe = source.subscribe(print);
});

clickAndPrint('#btn2', '#demo2', print => {
    //emits values of any type
    const source = of({name: 'Brian'}, [1, 2, 3], function hello() {
        return 'Hello';
    });
    //output: {name: 'Brian'}, [1,2,3], function hello() { return 'Hello' }
    const subscribe = source.subscribe(print);
});
