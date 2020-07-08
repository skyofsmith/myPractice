import {clickAndPrint} from '../../utils/events';
import {defaultIfEmpty} from 'rxjs/operators';
import {from,of,empty} from 'rxjs';

clickAndPrint('#btn1', '#demo1', print => {
  //emit 'Observable.empty()!' when empty, else any values from source
  const example = of().pipe(defaultIfEmpty('Observable.empty()!'));
  //output: 'Observable.empty()!'
  const subscribe = example.subscribe(print);
});

clickAndPrint('#btn2', '#demo2', print => {
  //emit 'Observable.empty()!' when empty, else any values from source
  const example = empty().pipe(defaultIfEmpty('Observable.empty()!'));
  //output: 'Observable.empty()!'
  const subscribe = example.subscribe(print);
});

clickAndPrint('#btn3', '#demo3', print => {
  //emit 'Observable.empty()!' when empty, else any values from source
  const example = from(new Array(3)).pipe(defaultIfEmpty('Observable.empty()!'));
  //output: 'Observable.empty()!'
  const subscribe = example.subscribe(print);
});
