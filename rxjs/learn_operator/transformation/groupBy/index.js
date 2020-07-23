import {clickAndPrint} from '../../utils/events'
import { groupBy, mergeMap, toArray, tap } from 'rxjs/operators';
import { from, of, zip } from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
  const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ];
  //emit each person
  const source = from(people);
  //group by age
  const example = source.pipe(
    groupBy(person => person.age),
    // return each item in group as array
    mergeMap(group => group.pipe(
      tap(v => {
        console.log(`tap: ${JSON.stringify(v)}`)
      }),
      toArray()
      )
    )
  );
  /*
    output:
    [{age: 25, name: "Sue"},{age: 25, name: "Frank"}]
    [{age: 30, name: "Joe"}]
    [{age: 35, name: "Sarah"}]
  */
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
  ];

  from(people)
    .pipe(
      groupBy(
        person => person.age,
        p => p.name
      ),
      mergeMap(group => zip(of(group.key), group.pipe(toArray())))
    )
    .subscribe(print);

  /*
    output:
    [25, ["Sue", "Frank"]]
    [30, ["Joe"]]
    [35, ["Sarah"]]
  */
});