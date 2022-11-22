<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from './components/HeaderComp.vue';
import Main from './components/MainComp.vue';

export default {
  name: 'App',
  components: {
    Header,
    Main
  }
}
</script>

<style lang="scss">
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
