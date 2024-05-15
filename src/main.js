import Vue from 'vue';
import WrapComponent from './components/WrapComponent.vue';
import store from './store/index.js';

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(WrapComponent),
}).$mount('#root')
