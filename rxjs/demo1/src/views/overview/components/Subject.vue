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
import { Subject, from } from "rxjs";
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

      // These are, under the hood, `subject.subscribe({...})`:
      multicasted.subscribe({
        next: v => console.log(`observerA: ${v}`)
      });
      multicasted.subscribe({
        next: v => console.log(`observerB: ${v}`)
      });

      // This is, under the hood, `source.subscribe(subject)`:
      multicasted.connect();
    }
    console.log("---Multicasted Observables---");
  }
};
</script>
