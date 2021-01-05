<template>
  <div id="app">
    <ul class="nav">
      <router-link to="/">Hello</router-link>
      <router-link to="page2">Page 2</router-link>
    </ul>
    
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.nav {
  display: flex;
  justify-content: center;
}
ul a {
  margin: 0 15px;
  cursor: pointer;
}

.fade-enter {
  opacity: 0;
  transform: translateY(20em);
  /* transform: translate(0, 100%); */
}

.fade-leave-to {
  transform: translateY(-15em);
  /* transform: translate(0, -100%); */
  opacity: 0;
}

.fade-enter-active, .fade-leave-active {
  transition: all.8s ease;
}

</style>
