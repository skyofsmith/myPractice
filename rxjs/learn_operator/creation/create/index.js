import {clickAndPrint} from '../../utils/events'
import {Observable} from "rxjs";


clickAndPrint('#btn1', '#demo1', print => {
    const hello = Observable.create(function (observer) {
        observer.next('Hello');
        observer.next('World');
    });
    const subscribe = hello.subscribe(print);
});

clickAndPrint('#btn2', '#demo2', print => {
    /*
      每秒自增值并且只发出偶数
    */
    const evenNumbers = Observable.create(function (observer) {
        let value = 0;
        const interval = setInterval(() => {
            if (value % 2 === 0) {
                observer.next(value);
            }
            value++;
        }, 1000);

        return () => clearInterval(interval);
    });
// 输出: 0...2...4...6...8
    const subscribe = evenNumbers.subscribe(print);
// 10秒后取消订阅
    setTimeout(() => {
        subscribe.unsubscribe();
    }, 10000);

});
