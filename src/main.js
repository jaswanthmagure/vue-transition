import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue';
import Page2 from './components/Page2.vue';

Vue.use(VueRouter);
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
