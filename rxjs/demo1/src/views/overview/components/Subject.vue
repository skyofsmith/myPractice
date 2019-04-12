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

export default {
  name: "Subject",
  mounted() {
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
  }
};
</script>
