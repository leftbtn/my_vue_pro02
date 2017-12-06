import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


const home = r => require.ensure([], () => r(require("../page/home/index")), "home");

export default new Router({
  mode: "history",
  linkActiveClass: "on",
  routes: [
   {
      path: '',
      redirect: "/home"
    },
    {
      path: "/home",
      component: home
    },
  ]
})
