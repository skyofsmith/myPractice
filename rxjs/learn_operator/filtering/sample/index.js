import {clickAndPrint} from '../../utils/events'
import { interval, zip, from, fromEvent, merge } from 'rxjs';
import { sample, mapTo } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  //emit value every 1s
  const source = interval(1000);
  //sample last emitted value from source every 2s
  const example = source.pipe(sample(interval(2000)));
  //output: 2..4..6..8..
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn2', '#demo2', print => {
  const source = zip(
    //emit 'Joe', 'Frank' and 'Bob' in sequence
    from(['Joe', 'Frank', 'Bob']),
    //emit value every 2s
    interval(2000)
  );
  //sample last emitted value from source every 2.5s
  const example = source.pipe(sample(interval(2500)));
  //output: ["Joe", 0]...["Frank", 1]...........
  const subscribe = example.subscribe(val => print(val));
});

clickAndPrint('#btn3', '#demo3', print => {
  const listener = merge(
    fromEvent(document, 'mousedown').pipe(mapTo(false)),
    fromEvent(document, 'mousemove').pipe(mapTo(true))
  )
    .pipe(sample(fromEvent(document, 'mouseup')))
    .subscribe(isDragging => {
      print(`Were you dragging?${isDragging}`);
    });
});
