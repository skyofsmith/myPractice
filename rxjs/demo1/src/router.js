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
      component: import(/* webpackChunkName: "overview" */ "./views/overview/Overview.vue"),
      children: [
        {
          path: "observable",
          name: "Observable",
          component: import(/* webpackChunkName: "overview" */ "./views/overview/Overview.vue")
        }
      ]
    },
    {
      path: "installation",
      name: "Installation",
      // component: () => import("./views/installation/Installation.vue")
      component: resolve =>
        require(["./views/installation/Installation.vue"], resolve)
    }
  ]
});
