import Vue from 'vue';
import axios from 'axios';
import router from './router';
import App from './App.vue';
import mint from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.prototype.$url = 'https://bird.ioliu.cn/v1/?url=';
Vue.prototype.$http = axios;
Vue.use(mint);
Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
