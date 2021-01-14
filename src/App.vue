<template>
  <div id="app">
    <ul class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="page2">Page 2</router-link>
      <router-link to="page3">Page 3</router-link>
    </ul>
    
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style >
/* // #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
//   margin-top: 60px;
// } */

@import "../src/styles/variable.scss";
</style>
