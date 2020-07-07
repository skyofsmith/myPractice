import {clickAndPrint} from '../../utils/events'
import { from } from 'rxjs';


clickAndPrint('#btn1', '#demo1', print => {
    //emit array as a sequence of values
    const arraySource = from([1, 2, 3, 4, 5]);
    //output: 1,2,3,4,5
    const subscribe = arraySource.subscribe(print);
});


clickAndPrint('#btn2', '#demo2', print => {

    //emit result of promise
    const promiseSource = from(new Promise(resolve => resolve('Hello World!')));
    //output: 'Hello World'
    const subscribe = promiseSource.subscribe(print);

});


clickAndPrint('#btn3', '#demo3', print => {
    //works on js collections
    const map = new Map();
    map.set(1, 'Hi');
    map.set(2, 'Bye');

    const mapSource = from(map);
    //output: [1, 'Hi'], [2, 'Bye']
    const subscribe = mapSource.subscribe(print);
});


clickAndPrint('#btn4', '#demo4', print => {
    //emit string as a sequence
    const source = from('Hello World');
    //output: 'H','e','l','l','o',' ','W','o','r','l','d'
    const subscribe = source.subscribe(print);
});
