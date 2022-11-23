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
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: rgb(31,31,31);
}
@font-face {
  font-family: berserker;
  src: url(./font/Berserker.ttf);
}

h1 {
  font-family: berserker;
}
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
