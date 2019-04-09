import * as rxjs from 'rxjs'
import { fromEvent, Observable, from } from 'rxjs'

import { throttleTime, map, scan } from 'rxjs/operators'

// overview/observables
{
  const observable = new Observable(subscriber => {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    setTimeout(() => {
      subscriber.next(4)
      subscriber.complete()
    }, 1000)
  })
  console.log('just before subscribe')
  observable.subscribe({
    next(x) {
      console.log('got value ' + x)
    },
    error(err) {
      console.error('something wrong occurred: ' + err)
    },
    complete() {
      console.log('done')
    }
  })
  console.log('just after subscribe')
}

{
  function foo() {
    console.log('Hello')
    return 42
  }

  var x = foo.call() // 等同于 foo()
  console.log(x)
  var y = foo.call() // 等同于 foo()
  console.log(y)

  console.log('before')
  console.log(foo.call())
  console.log('after')
}

{
  const foo = new Observable(subscriber => {
    console.log('Hello')
    subscriber.next(42)
  })

  foo.subscribe(x => {
    console.log(x)
  })
  foo.subscribe(y => {
    console.log(y)
  })

  console.log('before')
  foo.subscribe(function(x) {
    console.log(x)
  })
  console.log('after')
}

{
  function foo() {
    console.log('Hello')
    return 42
    return 100 // dead code. will never happen
  }
}
{
  const foo = new Observable(subscriber => {
    console.log('Hello')
    subscriber.next(42)
    subscriber.next(100) // "return" another value
    subscriber.next(200) // "return" yet another
  })

  console.log('before')
  foo.subscribe(x => {
    console.log(x)
  })
  console.log('after')
}

{
  const observable = new Observable(function subscribe(subscriber) {
    const id = setInterval(() => {
      subscriber.next('hi')
    }, 1000)
  })
  observable.subscribe(x => console.log(x))
}

{
  const observable = new Observable(function subscribe(subscriber) {
    subscriber.next(1)
    subscriber.next(2)
    subscriber.next(3)
    subscriber.complete()
    subscriber.next(4) // Is not delivered because it would violate the contract
  })
  observable.subscribe(x => console.log(x))
}

{
  console.log('before unsubscribe');
  const observable = from([10, 20, 30])
  const subscription = observable.subscribe(x => console.log(x))
  console.log('after unsubscribe');
  subscription.unsubscribe()
}

{
  function subscribe(subscriber) {
    const intervalId = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  
    return function unsubscribe() {
      clearInterval(intervalId);
    };
  }
  
  const unsubscribe = subscribe({next: (x) => console.log(x)});
  
  unsubscribe();
}