import {Observable} from 'rxjs';

{
  const hello = Observable.create(function (observer) {
    observer.next('Hello');
    observer.next('World');
  });
  const demo1 = document.querySelector('#demo1');
  const btnDemo1 = document.querySelector('#btn-demo1');
  btnDemo1.addEventListener('click', () => {
    const subscribe = hello.subscribe(val => {
      console.log(val);
      let div = document.createElement('div');
      div.innerHTML = val;
      demo1.append(div);
    });
  });
}

{
  const evenNumbers = Observable.create(function(observer) {
    let value = 0;
    const interval = setInterval(() => {
      if (value % 2 === 0) {
        observer.next(value);
      }
      value++;
    }, 1000);

    return () => clearInterval(interval);
  });
  const demo2 = document.querySelector('#demo2');
  const btnDemo2 = document.querySelector('#btn-demo2');
  btnDemo2.addEventListener('click', () => {
    const subscribe = evenNumbers.subscribe(val => {
      console.log(val);
      let div = document.createElement('div');
      div.innerHTML = val;
      demo2.append(div);
    });
    setTimeout(() => {
      subscribe.unsubscribe();
    }, 10000);
  });
}