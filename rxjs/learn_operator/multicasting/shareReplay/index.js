import {clickAndPrint} from '../../utils/events'
import { Subject } from 'rxjs';
import { pluck, shareReplay, tap } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  // simulate url change with subject
  const routeEnd = new Subject();
  
  // grab url and share with subscribers
  const lastUrl = routeEnd.pipe(
    tap(_ => print('executed')),
    pluck('url'),
    // defaults to all values so we set it to just keep and replay last one
    shareReplay(1)
  );
  
  // requires initial subscription
  const initialSubscriber = lastUrl.subscribe(print);
  
  // simulate route change
  // logged: 'executed', 'my-path'
  routeEnd.next({data: {}, url: 'my-path'});
  routeEnd.next({data: {}, url: 'my-path2'});
  
  // logged: 'my-path'
  const lateSubscriber = lastUrl.subscribe(print);
});