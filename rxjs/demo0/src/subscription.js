import * as rxjs from 'rxjs'
import { fromEvent, Observable, from, interval } from 'rxjs'

import { throttleTime, map, scan } from 'rxjs/operators'

const observable = interval(1000);
const subscription = observable.subscribe(x => console.log(x));
// Later:
// This cancels the ongoing Observable execution which
// was started by calling subscribe with an Observer.
subscription.unsubscribe();