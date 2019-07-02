<template>
  <div id="app">
    <router-view/>
    <Foot></Foot>
  </div>
</template>

<script>
import setRem from './../static/js/rem'
import Foot from "./components/foot/foot"
export default {
  name: 'App',
  components:{
    Foot
  },
  mounted() {
     setRem.setRem();
    window.onresize = setRem.setRem;
  },
 beforeCreate() {
   this.$router.push("/home");
 },
}
</script>

<style>
@import "./../static/css/common.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
