import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router);


const home = r => require.ensure([], () => r(require("../page/home/index")), "home");
const blog = r => require.ensure([], () => r(require("../page/blog/index")), "blog");
const blogDetail = r => require.ensure([],() => r(require("../page/blog/blogDetail")),"blogDetail");
const personalCenter = r => require.ensure([],()=> r(require("../page/center/index")),"personalCenter");

export default new Router({
  mode: "history",
  //linkActiveClass: "active",
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
      component: blogDetail,
      meta:{
        requiresAuth:true,//需要做路由验证时打开
      }
    },
    {
      path:"/personalCenter",
      component:personalCenter,
      meta:{
        requiresAuth:true,
      }
    }
  ]
})
