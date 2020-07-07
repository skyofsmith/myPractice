import {clickAndPrint} from '../../utils/events'
import { throwError } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
    //emits an error with specified value on subscription
    const source = throwError('This is an error!');
    //output: 'Error: This is an error!'
    const subscribe = source.subscribe({
        next: val => print(val),
        complete: () => print('Complete!'),
        error: val => print(`Error: ${val}`)
    });
});
