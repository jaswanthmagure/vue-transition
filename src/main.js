import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import { Swiper as SwiperClass, Mousewheel, Pagination } from 'swiper/core';
// import VueAwesomeSwiper from 'vue-awesome-swiper'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter';
SwiperClass.use([Mousewheel,Pagination]);

import Home from './components/Home.vue';
import Page2 from './components/Page2.vue';

Vue.use(VueRouter,getAwesomeSwiper(SwiperClass));
Vue.config.productionTip = true;

const routes = [
    {path: '/', component: Home},
    {path: '/page2', component: Page2}
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
