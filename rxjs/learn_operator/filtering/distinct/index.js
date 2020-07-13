import {clickAndPrint} from '../../utils/events'
import { of, from } from 'rxjs';
import { distinct } from 'rxjs/operators';

clickAndPrint('#btn1', '#demo1', print => {
  of(1, 2, 3, 4, 5, 1, 2, 3, 4, 5)
    .pipe(distinct())
    // OUTPUT: 1,2,3,4,5
    .subscribe(print);
});

clickAndPrint('#btn2', '#demo2', print => {
  const obj1 = { id: 3, name: 'name 1' };
  const obj2 = { id: 4, name: 'name 2' };
  const obj3 = { id: 3, name: 'name 3' };
  const vals = [obj1, obj2, obj3];

  from(vals)
    .pipe(distinct(e => e.id))
    .subscribe(print);

  /*
  OUTPUT:
  {id: 3, name: "name 1"}
  {id: 4, name: "name 2"}
   */
});
