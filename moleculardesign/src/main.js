import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "@/router";
import HighchartsVue from 'highcharts-vue'
import store from "@/store";

Vue.config.productionTip = false

window.echarts=require('echarts');
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(HighchartsVue);

Vue.prototype.$API_BASE_URL=''

new Vue({
  render: h => h(App),
  router:router,
  store: store,
}).$mount('#app')
