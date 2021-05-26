import Vue from 'vue'
import App from './App.vue'
/** 第三方通用组件 **/
require('./utils/3rd');

import router from './router';

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

