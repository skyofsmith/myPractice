import { take, map, combineAll } from 'rxjs/operators';
import { interval } from 'rxjs';

// 每秒发出值，并只取前2个
const source = interval(1000).pipe(take(2));
source.subscribe(v => console.log(Date.now(), v));
// 将 source 发出的每个值映射成取前5个值的 interval observable
const example = source.pipe(
    map(val => interval(1000).pipe(map(i => `${Date.now()}, Result (${val}): ${i}`), take(5)))
);
example.subscribe(v => console.log(Date.now(), v));
/*
  soure 中的2个值会被映射成2个(内部的) interval observables，
  这2个内部 observables 每秒使用 combineLatest 策略来 combineAll，
  每当任意一个内部 observable 发出值，就会发出每个内部 observable 的最新值。
*/
const combined = example.pipe(combineAll());
/*
  输出:
  ["Result (0): 0", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 0"]
  ["Result (0): 1", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 1"]
  ["Result (0): 2", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 2"]
  ["Result (0): 3", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 3"]
  ["Result (0): 4", "Result (1): 4"]
*/
const subscribe = combined.subscribe(val => console.log(val));

// my test
{
    const LETTER_MAP = ['a', 'b', 'c'];
    const x = interval(1000).pipe(take(3));
    const y = x.pipe(
        map(x => interval(1000).pipe(map(y => `${LETTER_MAP[x]}${y}`), take(5)))
    );
    const c = y.pipe(combineAll());
    c.subscribe(console.log);
}
