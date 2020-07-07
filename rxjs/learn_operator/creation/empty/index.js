import {Observable, empty, interval, fromEvent, merge } from 'rxjs';
import { switchMap, scan, takeWhile, startWith, mapTo } from 'rxjs/operators';
import {clickAndPrint} from '../../utils/events'

clickAndPrint('#btn1', '#demo1', print => {
    // 输出: 'Complete!'
    const subscribe = empty().subscribe({
        next: () => print('Next'),
        complete: () => print('Complete!')
    });
});

clickAndPrint('#btn2', '#demo2', print => {
    const countdownSeconds = 10;
    const setHTML = id => val => (document.getElementById(id).innerHTML = val);
    const pauseButton = document.getElementById('pause');
    const resumeButton = document.getElementById('resume');
    const interval$ = interval(1000).pipe(mapTo(-1));

    const pause$ = fromEvent(pauseButton, 'click').pipe(mapTo(false));
    const resume$ = fromEvent(resumeButton, 'click').pipe(mapTo(true));

    const timer$ = merge(pause$, resume$)
        .pipe(
            startWith(true),
            // 如果定时器暂停，则返回空的 Observable
            switchMap(val => (val ? interval$ : empty())),
            scan((acc, curr) => (curr ? curr + acc : acc), countdownSeconds),
            takeWhile(v => v >= 0)
        )
        .subscribe(setHTML('remaining'));

})
