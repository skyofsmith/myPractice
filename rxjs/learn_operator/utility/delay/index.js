import {clickAndPrint} from '../../utils/events'
import { fromEvent, of, merge } from 'rxjs';
import { mergeMap, delay, takeUntil, mapTo } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
    const mousedown$ = fromEvent(document, 'mousedown');
    const mouseup$ = fromEvent(document, 'mouseup');

    mousedown$
        .pipe(mergeMap(event => of(event).pipe(delay(700), takeUntil(mouseup$))))
        .subscribe(event => print('Long Press!', event));
});

clickAndPrint('#btn2', '#demo2', print => {
    //emit one item
    const example = of(null);
    //delay output of each by an extra second
    const message = merge(
        example.pipe(mapTo('Hello')),
        example.pipe(mapTo('World!'), delay(1000)),
        example.pipe(mapTo('Goodbye'), delay(2000)),
        example.pipe(mapTo('World!'), delay(3000))
    );
    //output: 'Hello'...'World!'...'Goodbye'...'World!'
    const subscribe = message.subscribe(val => print(val));
});
