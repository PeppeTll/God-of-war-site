<template>
  <section>
    <div class="container mx-auto">
      <div class="columns-2 py-20 flex justify-between gap-16">
        <div class="text-white flex justify-center flex-col gap-5 px-5">
          <h1 class="text-2xl">{{text.h1}}</h1>
          <p class="font-bold">{{text.p1}}</p>
          <p class="font-bold">{{text.p2}}</p>
        </div>
        <figure>
          <img :src="img" alt="" />
        </figure>
    </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      text: {
        h1: "Controller wireless DualSense – God of War Ragnarök ",
        p1: "Armati per la battaglia del Ragnarök con questo controller in edizione limitata.",
        p2: `Il suo design bicolore, blu freddo su uno sfondo bianco ghiaccio, si ispira al mondo norreno di Midgard ed è impreziosito dall'emblema di un orso e di un lupo, che rappresentano Kratos e Atreus.`,
      },
      img: require('../assets/imgGod/dualsense-gow-ragnarok-screenshot-01-en-20sep22.webp')
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-size: cover;
  background-image: url(../assets/imgGod/dualsense-god-of-war-ragnarok-background-block-desktop-01-en-20sep22.jpg);
}
</style>