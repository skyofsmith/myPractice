import {clickAndPrint} from '../../utils/events'
import { throwError, of, timer, from, fromEvent } from 'rxjs';
import {
    mergeMap,
    catchError,
    tap,
    switchMap,
    concatMap,
    exhaustMap
} from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
    //emit error
    const source = throwError('This is an error!');
    //gracefully handle error, returning observable with error message
    const example = source.pipe(catchError(val => of(`I caught: ${val}`)));
    //output: 'I caught: This is an error'
    const subscribe = example.subscribe(print);
});

clickAndPrint('#btn2', '#demo2', print => {
    //create promise that immediately rejects
    const myBadPromise = () =>
        new Promise((resolve, reject) => reject('Rejected!'));
    //emit single value after 1 second
    const source = timer(1000);
    //catch rejected promise, returning observable containing error message
    const example = source.pipe(
        mergeMap(_ =>
            from(myBadPromise()).pipe(catchError(error => of(`Bad Promise: ${error}`)))
        )
    );
    //output: 'Bad Promise: Rejected'
    const subscribe = example.subscribe(print);
});


clickAndPrint('#btn3', '#demo3', print => {
    const fakeRequest$ = of().pipe(
        tap(_ => print('fakeRequest')),
        throwError
    );
    const iWillContinueListening$ = fromEvent(
        document.getElementById('continued'),
        'click'
    ).pipe(
        switchMap(_ => fakeRequest$.pipe(catchError(_ => of('keep on clicking!!!'))))
    );
    const iWillStopListening$ = fromEvent(
        document.getElementById('stopped'),
        'click'
    ).pipe(
        switchMap(_ => fakeRequest$),
        catchError(_ => of('no more requests!!!'))
    );
    iWillContinueListening$.subscribe(print);
    iWillStopListening$.subscribe(print);
});
