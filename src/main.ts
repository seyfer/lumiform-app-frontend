/* eslint-disable @typescript-eslint/ban-ts-ignore,import/newline-after-import,import/first */
import './plugins/compositionAPI';
import Vue from 'vue';
import Buefy from 'buefy';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/veeValidate';
import 'buefy/dist/buefy.css';
import './scss/main.scss';

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
