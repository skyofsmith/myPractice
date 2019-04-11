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
          component: () => import("./views/overview/Overview.vue")
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
