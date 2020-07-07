import {clickAndPrint} from '../../utils/events'
import { generate } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
    generate(
        2,
        x => x <= 8,
        x => x + 3
    ).subscribe(print);
    /*
    OUTPUT:
    2
    5
    8
    */
});

clickAndPrint('#btn2', '#demo2', print => {
    generate(
        2,
        x => x <= 38,
        x => x + 3,
        x => '.'.repeat(x)
    ).subscribe(print);

    /*
    OUTPUT:
    ..
    .....
    ........
    ...........
    ..............
    .................
    ....................
    .......................
    ..........................
    .............................
    ................................
    ...................................
    ......................................
    */
});
