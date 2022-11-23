<template>
  <section>
    <div id="sliderWrapper">
      <div
        id="slide"
        v-for="(el, i) in slideList"
        :key="i"
        v-show="i === index"
        class="
          w-full 
          m-0 
          relative"
      >
        <figure>
          <img :src="el.jumbo" alt="" class="w-full" />
        </figure>
        <div
          v-motion-fade-visible
          class="
            flex
            flex-col
            absolute
            justify-center
            items-start
            text-white
            2xl:gap-10
            2xl:bottom-10
            2xl:max-w-[25vw]
            2xl:left-[20%]
            2xl:text-3xl
            xl:gap-3
            xl:bottom-5
            xl:max-w-[25vw]
            xl:left-[20%]
            xl:text-lg
            lg:gap-3
            lg:bottom-2
            lg:max-w-[20vw]
            lg:left-[20%]
            lg:text-base
          "
          :class="i === 4 ? '2xl:text-black xl:text-black lg:text-black '  : ''"
          
        >
          <img :src="el.sideImg" alt="" class="max-w-[20vw]" />
          <h1 class="">{{ el.h1 }}</h1>
          <p class="">{{ el.p }}</p>
          <button
            class="
              border-2
              p-2
              font-bold
              rounded-full
              bg-red-700
              border-red-700
              cursor-pointer
              lg:text-base
            "
          >
            {{ el.btn }}
          </button>
        </div>
      </div>
    </div>
    <div
      id="cardWrapper"
      class="
        container
        mx-auto
        flex
        my-5
        gap-6
        row-start-2
        justify-center
        items-center
        lg:flex-wrap
        xl:gap-x-32
        2xl:gap-0
        
      "
    >
      <div
        v-for="(el, i) in cardList"
        :key="i"
        @click="cardShowSlide(i)"
        class="
          w-[249px]
          rounded-2xl
          overflow-hidden
          flex
          content-center
          items-center
          p-2
          opacity-[.6]
          hover:opacity-100
          hover:transition-all
          hover:duration-700
          cursor-pointer
        "
        :class="i === index ? 'border-2 border-sky-500 transition-all duration-700 opacity-100' : 'border-0'"
      >
        <figure class="overflow-hidden rounded-xl">
          <img :src="el.img" alt="" />
        </figure>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      slideList: [
        {
          jumbo: require("../assets/imgGod/black-friday-2022-homepage-hero-banner-desktop-01-en-26oct22.webp"),
          sideImg: require("../assets/imgGod/black-friday-logo-01-26oct22$it.webp"),
          h1: "Le offerte del Black Friday sono disponibili ora",
          p: "Ottieni sconti imperdibili su straordinari giochi, contenuti aggiuntivi, accessori, abbigliamento e molto altro",
          btn: "Sfoglia le offerte",
        },
        {
          jumbo: require("../assets/imgGod/god-of-war-ragnarok-hero-banner-desktop-02-en-07sep21.webp"),
          sideImg: require("../assets/imgGod/god-of-war-ragnarok-no-shadow-logo-01-03nov22$en.webp"),
          h1: "La saga norrena continua",
          p: "Avventurati in un viaggio epico ed emozionante: accompagna Kratos e Atreus nella loro lotta per resistere e lasciarsi il passato alle spalle, disponibile ora su PS4 e PS5",
          btn: "Maggiori informazioni",
        },
        {
          jumbo: require("../assets/imgGod/call-of-duty-warzone-update-2-homepage-hero-desktop-en-01-03nov22.jpg"),
          sideImg: require("../assets/imgGod/call-of-duty-warzone-update-2-logo-en-01-03nov22.webp"),
          h1: "Una nuova era ha inizio",
          p: "Preparati a tuffarti in call of duty: Warzone 2.0 e nella stagione 1 di Call of Duty Modern Warfare II",
          btn: "Maggiori informazioni",
        },
        {
          jumbo: require("../assets/imgGod/spider-man-miles-morales-PC-homepage-hero-desktop-26oct22.jpg"),
          sideImg: require("../assets/imgGod/marvels-spider-man-miles-morales-logo-01-ps5-en-03nov20.webp"),
          h1: "Essere migliori. Essere sè stessi",
          p: "Raccogli il testimone di Spider-Man e dimostrati all'altezza",
          btn: "Maggiori informazioni",
        },
        {
          jumbo: require("../assets/imgGod/sonic-frontiers-hero-banner-desktop-01-04nov22$en.webp"),
          sideImg: require("../assets/imgGod/sonic-frontiers-logo-01-ps4-ps5-en-19aug22.webp"),
          h1: "Vivi Sonic come non l'hai mai visto",
          p: "Accelera verso nuove vette nella nuova avventura a zona aperta e ad alta velocità di Sonic the Hedgehog, disponibile ora su PS4 e PS5",
          btn: "Maggiori informazioni",
        },
        {
          jumbo: require("../assets/imgGod/psvr2-register-hero-banner-desktop-03-en-19oct22.webp"),
          sideImg: require("../assets/imgGod/psvr2-white-logo-01-en-05jan22.webp"),
          h1: "feel a new real",
          p: "La realtà virtuale sta per fare un enorme balzo generazionale in avanti: esplora mondi che sembrano davvero reali. In arrivo il 22 febbraio 2023",
          btn: "Maggiori informazioni",
        },
      ],
      cardList: [
        {
          img: require("../assets/imgGod/black-friday-2022-keyart-01-26oct22$it.webp"),
        },
        {
          img: require("../assets/imgGod/god-of-war-ragnarok-listing-thumb-01-09sep21$en.webp"),
        },
        {
          img: require("../assets/imgGod/call-of-duty-warzone-update-2-keyart-en-01-03nov22.webp"),
        },
        {
          img: require("../assets/imgGod/spider-man-miles-morales-PC-keyart-26oct22.webp"),
        },
        {
          img: require("../assets/imgGod/sonic-frontiers-keyart-01-ps4-ps5-25aug22$en.webp"),
        },
        {
          img: require("../assets/imgGod/psvr2-register-keyart-03-en-24oct22.webp"),
        },
      ],
    };
  },
  methods: {
    slideShowTimeOut: function () {
      setInterval(() => {
        this.index++;
        if (this.index > this.slideList.length - 1) {
          this.index = 0;
        }
      }, 4000);
    },
    cardShowSlide: function (i) {
      this.index = i;
    },
  },
  created() {
    this.slideShowTimeOut();
  },
};
</script>

<style lang="scss" scoped>
</style>