<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <div id="main">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/navigation/Header'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss">
@import 'node_modules/bootstrap/scss/bootstrap';
@import 'node_modules/bootstrap-vue/src/index.scss';
@import '@/themes/_barrel.scss';
body {
  padding: 0;
  margin: 0;
  background: $background-100;
}
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $default-100;
  height: 200rem;
}
#main {
  margin-top: 110px;
}
@media only screen and (min-width: 900px) {
  #main {
    margin-top: 7em;
  }  
}
</style>
