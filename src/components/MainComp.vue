<template>
  <div>
    <Slider />
    <Jumbo />
    <SectionOne />
    <SectionTwo />
  </div>
</template>

<script>
import Slider from '../components/SliderComp.vue';
import Jumbo from '../components/JumboComp.vue';
import SectionOne from './SectionOne.vue';
import SectionTwo from './SectionTwo.vue';
export default {
  name: 'App',
  components: {
    Slider,
    SectionOne,
    Jumbo,
    SectionTwo,
  }
}
</script>

<style lang="scss" scoped>

</style>