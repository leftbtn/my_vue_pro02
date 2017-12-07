import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


const home = r => require.ensure([], () => r(require("../page/home/index")), "home");
const blog = r => require.ensure([], () => r(require("../page/blog/index")), "blog")
const blogDetail = r => require.ensure([],() => r(require("../page/blog/blogDetail")),"blogDetail")

export default new Router({
  mode: "history",
  linkActiveClass: "active",
  routes: [
   {
      path: '',
      redirect: "/home"
    },
    {
      path: "/home",
      component: home
    },
    {
      path: "/blog",
      component: blog
    },
    {
      path: "/blogDetail/:id",
      component: blogDetail
    },
  ]
})
