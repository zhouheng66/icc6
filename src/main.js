import Vue from 'vue'
import App from './App.vue'
//引入路由
import router from '@/router'
//引入仓库
import store from './store';
//引入swiper样式
import "swiper/css/swiper.css";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//全局组件Header
import Header from '@/components/Header';
Vue.component(Header.name,Header);
import Footer from '@/components/Footer';
Vue.component(Footer.name,Footer);
import Top from '@/components/Top'
Vue.component(Top.name,Top);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
