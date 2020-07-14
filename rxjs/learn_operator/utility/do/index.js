import {clickAndPrint} from '../../utils/events'
import { of } from 'rxjs';
import { tap, map } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
    const source = of(1, 2, 3, 4, 5);
    // transparently log values from source with 'tap'
    const example = source.pipe(
        tap(val => print(`BEFORE MAP: ${val}`)),
        map(val => val + 10),
        tap(val => print(`AFTER MAP: ${val}`))
    );
    //'tap' does not transform values
    //output: 11...12...13...14...15
    const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
    const source = of(1, 2, 3, 4, 5);

    // tap also accepts an object map to log next, error, and complete
    const example = source
        .pipe(
            map(val => val + 10),
            tap({
                next: val => {
                    // on next 11, etc.
                    print('on next', val);
                },
                error: error => {
                    print('on error', error.message);
                },
                complete: () => print('on complete')
            })
        )
        // output: 11, 12, 13, 14, 15
        .subscribe(val => print(val));
});
