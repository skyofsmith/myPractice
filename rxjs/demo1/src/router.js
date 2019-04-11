import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/overview"
    },
    {
      path: "/overview",
      name: "Overview",
      component: () => import("./views/overview/Overview.vue"),
      children: [
        {
          path: "observable",
          name: "Observable",
          component: () => import("./views/overview/components/Observable.vue")
        },
        {
          path: "subscription",
          name: "Subscription",
          component: () =>
            import("./views/overview/components/Subscription.vue")
        },
        {
          path: "subject",
          name: "Subject",
          component: () => import("./views/overview/components/Subject.vue")
        }
      ]
    },
    {
      path: "/installation",
      name: "Installation",
      component: () => import("./views/installation/Installation.vue")
    }
  ]
});
