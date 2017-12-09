// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'; // 引入axios
import VueAxios from 'vue-axios';


import './assets/css/bootstrap.css';
import './assets/css/chocolat.css';
import './assets/css/style.css';

import './assets/js/jquery-1.11.1.min.js';
import './assets/js/bootstrap.js';
import './assets/js/jquery.chocolat.js';
import './assets/js/jquery.wmuSlider.js';


Vue.use(VueAxios, axios);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
