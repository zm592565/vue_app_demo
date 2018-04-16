// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from './store/store'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper, /* { default global options } */)

import Footer from '@/components/Bottom/bottom.vue';
import Functions from '@/functions/function.js'

import Rem from '@/rem/rem';

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

import '@/assets/css/base.styl';


Vue.use(MuseUI);
Vue.component('Footer',Footer);

Vue.config.productionTip = false;

fastclick.attach(document.body);

Vue.use(VueLazyload, {
  loading: require('./assets/logo.png')
})


Vue.prototype.$http = Axios;
Vue.prototype.$function=Functions;


/*添加cordova支持的方法*/
// document.addEventListener("deviceready", function(){
//   /* eslint-disable no-new */
//   new Vue({
//     el: '#app',
//     router,
//     store,
//     components: { App },
//     template: '<App/>'
//   })
//
//   /*启用页显示*/
//   window.navigator.splashscreen.show()
//
// }, false);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
