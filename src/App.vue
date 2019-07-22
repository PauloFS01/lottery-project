<template>
  <div id="app">
    <div id="nav">
      <Header />
    </div>
    <router-view/>
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
}
</style>
