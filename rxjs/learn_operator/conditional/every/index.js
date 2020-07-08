import {clickAndPrint} from '../../utils/events'
import { every, delay, tap } from 'rxjs/operators';
import { concat, of } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
  //emit 5 values
  const source = of(1, 2, 3, 4, 5);
  const example = source.pipe(
    //is every value even?
    every(val => val % 2 === 0)
  );
  //output: false
  const subscribe = example.subscribe(print);
});

clickAndPrint('#btn2', '#demo2', print => {
  //emit 5 values
  const allEvens = of(2, 4, 6, 8, 10);
  const example = allEvens.pipe(
    //is every value even?
    every(val => val % 2 === 0)
  );
  //output: true
  const subscribe = example.subscribe(print);
});

clickAndPrint('#btn3', '#demo3', print => {
  const returnCode = request => (Number.isInteger(request) ? 200 : 400);
  const fakeRequest = request =>
    of({ code: returnCode(request) }).pipe(
      tap(_ => print(request)),
      delay(1000)
    );

  const apiCalls$ = concat(
    fakeRequest(1),
    fakeRequest('invalid payload'),
    fakeRequest(2) //this won't execute as every will return false for previous line
  ).pipe(
    every(e => e.code === 200),
    tap(e => print(`all request successful: ${e}`))
  );

  apiCalls$.subscribe();
});