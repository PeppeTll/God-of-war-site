<template>
  <div class="container mx-auto p-3">
    <header class="flex justify-between">
      <div id="logo" class="w-16">
        <img
          src="../assets/imgGod/NicePng_ps4-logo-png_104138.png"
          class="w-full"
          alt=""
        />
      </div>
      <nav class="flex items-center font-bold">
        <ul class="flex gap-2 text-transform: capitalize">
          <li v-for="(el, i) in navList" :key="i">
            <a :href="el.href" class="text-gow text-lg"> {{ el.name }} </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "home",
          href: "#",
        },
        {
          name: "home",
          href: "#",
        },
        {
          name: "home",
          href: "#",
        },
        {
          name: "home",
          href: "#",
        },
        {
          name: "home",
          href: "#",
        },
      ],
    };
  },
};
</script>
