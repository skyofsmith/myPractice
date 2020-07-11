import {clickAndPrint} from '../../utils/events'
import {fromEvent, interval} from 'rxjs';
import {audit, auditTime, tap} from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  const clickTime = Date.now();
  let count = 0;
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(
    tap(x => {
      count++;
      print(`${count}...${Date.now() - clickTime}: (${x.clientX},${x.clientY}).clicked`);
    }),
    auditTime(1000));
  result.subscribe(x => {
    print(`${count}...${Date.now() - clickTime}: (${x.clientX},${x.clientY}).received`)
  });
});
