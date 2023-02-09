import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router';
import  store from './store';
import axios from 'axios';
import 'atropos/css'

// import ServerError from './common/500'
// Vue.component('ServerError', ServerError)
// import VueElementLoading from 'vue-element-loading'
// Vue.component('VueElementLoading', VueElementLoading)
// import { VueEditor } from "vue2-editor";
// Vue.component('VueEditor', VueEditor)
// import JsonExcel from "vue-json-excel";
// Vue.component("downloadExcel",JsonExcel);
Vue.config.productionTip = false

// axios.defaults.baseURL = 'http://192.168.55.2:4003';
// Vue.prototype.baseURL = 'http://192.168.55.2:4003';
// Vue.prototype.mediaURLOld = 'http://192.168.55.2:4003';
// Vue.prototype.mediaURL = 'http://192.168.55.2:4003/file/get/';

// axios.defaults.baseURL = 'http://13.233.1.101';
// Vue.prototype.baseURL = 'http://13.233.1.101';
// Vue.prototype.mediaURLOld = 'http://13.233.1.101';
// Vue.prototype.mediaURL = 'http://13.233.1.101/file/get/';

// axios.defaults.baseURL = 'http://whalewatch.leopardtechlabs.in';
// Vue.prototype.baseURL = 'http://whalewatch.leopardtechlabs.in';
// Vue.prototype.mediaURLOld = 'http://whalewatch.leopardtechlabs.in';
// Vue.prototype.mediaURL = 'http://whalewatch.leopardtechlabs.in/file/get/';                         //whale sharkk

axios.defaults.baseURL = 'http://192.168.54.19:5500';
Vue.prototype.baseURL = 'http://192.168.54.19:5500'; 
Vue.prototype.mediaURL = 'http://192.168.54.19:5500/file/get/';//re local


new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
