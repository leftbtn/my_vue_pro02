// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'; // 引入axios
import VueAxios from 'vue-axios';
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";



import './assets/css/bootstrap.css';
import './assets/css/chocolat.css';
import './assets/css/style.css';

import './assets/js/jquery-1.11.1.min.js';
import './assets/js/bootstrap.js';
import './assets/js/jquery.chocolat.js';
import './assets/js/jquery.wmuSlider.js';




Vue.use(VueAxios, axios);
Vue.use(ElementUI);

Vue.config.productionTip = false
import store from './vuex/store'
var userid = localStorage.getItem("userid");
store.commit("UserIsLogin",userid);

import http from "./axios/http";
import api from "./axios/api";
if(store.state.IsLogin){
  let data = new Object();
  data.userid = userid;
  http.get(api.getUserInformationForIdApi,data).then(res=>{
    let r = res.data;
    if(r.success){
      let user = new Object();
      user.Account = r.Account;
      user.NikeName = r.NikeName;
      user.CreateDateTime = r.CreateDateTime;
      user.userid = userid;
      store.commit("SaveUserInformation",user);

    }else{ ElementUI.message({message: "获取信息失败,请重新登录",type: 'error',showClose: true});}
 }); 
}


//使用路由验证
router.beforeEach((to,form,next) =>{
  if(to.path ==='/home'){
    
    next();
  }
  else{
    if(to.meta.requiresAuth && !store.state.IsLogin){
      console.log(ElementUI)
      next({path:'/home'});
    }
    else{
      next();
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
