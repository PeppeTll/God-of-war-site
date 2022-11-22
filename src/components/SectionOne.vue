<template>
  <section>
    <div class="container mx-auto py-8 bg-i">
      <div class="text-center text-6xl text-gow">
        <h1 class="text-transform: uppercase pb-8">la saga norrena continua</h1>
      </div>
      <div class="columns-3 text-white">
        <div
          v-for="(el, i) in cardList"
          :key="i"
          class="p-2"
          
        >
          <figure class="w-full rounded-[20px] overflow-hidden">
            <img :src="el.img" alt="" class="object-cover object-center" />
          </figure>
          <div class="flex flex-col font-bold">
            <h1 class="text-3xl py-5">{{ el.title }}</h1>
            <p class="text-lg">{{ el.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      cardList: [
        {
          img: require("@/assets/imgGod/card-3.webp"),
          title: "Un futuro non ancora scritto",
          description:
            'Atreus cerca informazioni che possano aiutarlo a comprendere la profezia di "Loki" e il ruolo che lo attende nel Ragnarök. Kratos deve decidere se restare incatenato dalla paura di ripetere i suoi errori o se liberarsi del passato per diventare il padre di cui ha bisogno Atreus',
        },
        {
          img: require("@/assets/imgGod/card-2.webp"),
          title: "Strumenti di guerra",
          description:
            "Oltre a una miriade di nuove abilità sia per Kratos che per Atreus, fanno ritorno il Leviatano, le Lame del caos e lo Scudo del guardiano. Le letali abilità spartane di Kratos saranno messe a dura prova come non mai nell'affrontare dèi e mostri dei Nove regni cercando di proteggere la sua famiglia",
        },
        {
          img: require("@/assets/imgGod/card-1.jpg"),
          title: "Esplora immensi regni",
          description:
            "Esplora pericolose e straordinarie ambientazioni, affronta una grande varietà di creature nemiche, mostri e dèi norreni, e accompagna Kratos e Atreus a cercare risposte",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
section {
  background-image: url(../assets/imgGod/section5c-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>