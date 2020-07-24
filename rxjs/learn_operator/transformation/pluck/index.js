import {clickAndPrint} from '../../utils/events'
import { from } from 'rxjs';
import { pluck } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const source = from([
    { name: 'Joe', age: 30 },
    { name: 'Sarah', age: 35 }
  ]);
  //grab names
  const example = source.pipe(pluck('name'));
  //output: "Joe", "Sarah"
  const subscribe = example.subscribe(val => print(val));
})

clickAndPrint('#btn2', '#demo2', print => {
  const source = from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
    //will return undefined when no job is found
    { name: 'Sarah', age: 35 }
  ]);
  //grab title property under job
  const example = source.pipe(pluck('job', 'title'));
  //output: "Developer" , undefined
  const subscribe = example.subscribe(val => print(val));
})