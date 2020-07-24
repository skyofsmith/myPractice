import {clickAndPrint} from '../../utils/events'
import { Subject, interval, of } from 'rxjs';
import { scan, delay, repeat, mergeMap, map, distinctUntilChanged } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const subject = new Subject();
  //scan example building an object over time
  const example = subject.pipe(
    scan((acc, curr) => Object.assign({}, acc, curr), {})
  );
  //log accumulated values
  const subscribe = example.subscribe(val =>
    print(`Accumulated object: ${JSON.stringify(val)}`)
  );
  //next values into subject, adding properties to object
  // {name: 'Joe'}
  subject.next({ name: 'Joe' });
  // {name: 'Joe', age: 30}
  subject.next({ age: 30 });
  // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
  subject.next({ favoriteLanguage: 'JavaScript' });
})

clickAndPrint('#btn2', '#demo2', print => {
  const subject = new Subject();
  //scan example building an object over time
  const example = subject.pipe(
    scan((acc, curr) => Object.assign({}, acc, curr), {})
  );
  //log accumulated values
  const subscribe = example.subscribe(val =>
    print(`Accumulated object: ${JSON.stringify(val)}`)
  );
  //next values into subject, adding properties to object
  // {name: 'Joe'}
  subject.next({ name: 'Joe' });
  // {name: 'Joe', age: 30}
  subject.next({ age: 30 });
  // {name: 'Joe', age: 30, favoriteLanguage: 'JavaScript'}
  subject.next({ favoriteLanguage: 'JavaScript' });
})

clickAndPrint('#btn3', '#demo3', print => {
  // Accumulate values in an array, emit random values from this array.
  const scanObs = interval(1000)
    .pipe(
      scan((a, c) => [...a, c], []),
      map(r => r[Math.floor(Math.random() * r.length)]),
      distinctUntilChanged()
    )
    .subscribe(print);
})


clickAndPrint('#btn4', '#demo4', print => {
  const fakeRequest = of('response').pipe(delay(2000));

  // output:
  // ['response'],
  // ['response','response'],
  // ['response','response','response'],
  // etc...

  interval(1000)
    .pipe(
      mergeMap(_ => fakeRequest),
      scan((all, current) => [...all, current], [])
    )
    .subscribe(print);
})