import {clickAndPrint} from '../../utils/events'
import { from, Notification } from 'rxjs';
import { dematerialize } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {

    //emit next and error notifications
    const source = from([
        Notification.createNext('SUCCESS!'),
        Notification.createError('ERROR!')
    ]).pipe(
        //turn notification objects into notification values
        dematerialize()
    );

    //output: 'NEXT VALUE: SUCCESS' 'ERROR VALUE: 'ERROR!'
    const subscription = source.subscribe({
        next: val => print(`NEXT VALUE: ${val}`),
        error: val => print(`ERROR VALUE: ${val}`)
    });
});
