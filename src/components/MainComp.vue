<template>
  <div>
    <Jumbo />
    <SectionOne />
    <SectionTwo />
  </div>
</template>

<script>
import Jumbo from '../components/JumboComp.vue';
import SectionOne from './SectionOne.vue';
import SectionTwo from './SectionTwo.vue';
export default {
  name: 'App',
  components: {
    SectionOne,
    Jumbo,
    SectionTwo
  }
}
</script>

<style lang="scss" scoped>

</style>