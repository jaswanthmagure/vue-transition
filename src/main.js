import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import HelloWorld from './components/HelloWorld.vue';
import Page2 from './components/Page2.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
    {path: '/', component: HelloWorld},
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
