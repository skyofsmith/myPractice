<style lang="stylus" scoped></style>
<template>
  <div>Subscription</div>
</template>
<script>
import { interval } from "rxjs";

export default {
  name: "Subscription",
  mounted() {
    {
      const observable = interval(1000);
      const subscription = observable.subscribe(x => console.log(x));
      subscription.unsubscribe();
    }
    {
      const observable1 = interval(400);
      const observable2 = interval(300);
      const timeBegin = new Date().getTime();

      const subscription = observable1.subscribe(x => {
        console.log("first: " + x);
        console.log(new Date().getTime() - timeBegin);
      });
      const childSubscription = observable2.subscribe(x => {
        console.log("second: " + x);
        console.log(new Date().getTime() - timeBegin);
      });

      subscription.add(childSubscription);

      setTimeout(() => {
        // Unsubscribes BOTH subscription and childSubscription
        subscription.unsubscribe();
      }, 1000);
    }
  }
};
</script>
