import {clickAndPrint} from '../../utils/events'
import { fromEvent, interval } from 'rxjs';
import { audit } from 'rxjs/operators'

clickAndPrint('#btn1', '#demo1', print => {
  const clicks = fromEvent(document, 'click');
  const result = clicks.pipe(audit(x => {
    print(`${Date.now()}: ${x.clientX},${x.clientY}.clicked`);
    return interval(1000)
  }));
  result.subscribe(x => {

    print(`${Date.now()}: ${x.clientX},${x.clientY}.received`)
  });
});
