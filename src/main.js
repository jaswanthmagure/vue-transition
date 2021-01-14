import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { Swiper as SwiperClass, Mousewheel, Pagination, Keyboard } from 'swiper/core';
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
SwiperClass.use([Mousewheel,Pagination,Keyboard]);

import Home from './components/Home.vue';
import Page2 from './components/Page2.vue';
import Page3 from './components/Page3.vue';

Vue.use(VueRouter,getAwesomeSwiper(SwiperClass));
Vue.config.productionTip = true;

const routes = [
    {path: '/', component: Home},
    {path: '/page2', component: Page2},
    {path: '/page3', component: Page3}
]

const router = new VueRouter ({
  mode: 'history',
  routes
});

// new Vue({
//   router,
//   render: h => h(App),
// }).$mount('#app')

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
