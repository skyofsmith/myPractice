<style lang="stylus" scoped>
.subject {

}
</style>
<template>
  <div class="subject">
    Subject
  </div>
</template>
<script>
import { Subject, from, interval } from "rxjs";
import { multicast } from "rxjs/operators";
export default {
  name: "Subject",
  mounted() {
    console.log("---Subject---");
    {
      const subject = new Subject /*<number>*/();

      subject.subscribe({
        next: v => console.log(`observerA: ${v}`)
      });
      subject.subscribe({
        next: v => console.log(`observerB: ${v}`)
      });

      subject.next(1);
      subject.next(2);
    }
    console.log("---   ---");
    {
      const subject = new Subject /*<number>*/();

      subject.subscribe({
        next: v => console.log(`observerA: ${v}`)
      });
      subject.subscribe({
        next: v => console.log(`observerB: ${v}`)
      });

      const observable = from([1, 2, 3]);

      observable.subscribe(subject);
    }
    console.log("---Subject---");

    console.log("---Multicasted Observables---");
    {
      const source = from([1, 2, 3]);
      const subject = new Subject();
      const multicasted = source.pipe(multicast(subject));

      multicasted.subscribe({
        next: v => console.log(`observerA: ${v}`)
      });
      multicasted.subscribe({
        next: v => console.log(`observerB: ${v}`)
      });

      multicasted.connect();
    }
    console.log("---Multicasted Observables---");
    console.log("---Reference counting---");
    {
      const source = interval(500);
      const subject = new Subject();
      const multicasted = source.pipe(multicast(subject));
      let subscription1, subscription2, subscriptionConnect;

      subscription1 = multicasted.subscribe({
        next: v => console.log(`observerA: ${v}`)
      });
      subscriptionConnect = multicasted.connect();

      setTimeout(() => {
        subscription2 = multicasted.subscribe({
          next: v => console.log(`observerB: ${v}`)
        });
      }, 600);

      setTimeout(() => {
        subscription1.unsubscribe();
      }, 1200);

      setTimeout(() => {
        subscription2.unsubscribe();
        subscriptionConnect.unsubscribe();
      }, 2000);
    }
    console.log("---Reference counting---");
  }
};
</script>
