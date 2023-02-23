<template>
  <div class="flex items-center py-5">
    <router-link
      class="text-xl uppercase font-bold text-purple-800 router-active"
      to="/"
      >Movie store</router-link
    >
  </div>
  <div class="justify-center items-center flex gap-6">
    <Switch
      v-model="DarkTheme"
      :class="DarkTheme ? 'bg-purple-600' : 'bg-gray-400'"
      class="relative inline-flex h-6 w-11 items-center rounded-full"
    >
      <span
        :class="DarkTheme ? 'translate-x-6' : 'translate-x-1'"
        class="inline-block h-4 w-4 transform rounded-full bg-white transition"
      />
    </Switch>
    <div class="burger md:hidden" @click="burgerMenu">
      <burger-icon v-if="!OpenBurger" />
      <burger-close-icon v-else />
      <nav :class="{ open_burger: OpenBurger, hidden: !OpenBurger }">
        <ul class="mobile_nav_list text-gray-500 font-semibold">
          <li><router-link class="nav_menu" to="/">Home</router-link></li>
          <li><router-link class="nav_menu" to="/about">About</router-link></li>
        </ul>
      </nav>
    </div>
    <nav class="max-md:hidden">
      <ul class="text-gray-500 h-full font-semibold flex">
        <li><router-link class="nav_menu" to="/">Home</router-link></li>
        <li><router-link class="nav_menu" to="/about">About</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import BurgerIcon from "@/components/icons/BurgerIcon.vue";
import BurgerCloseIcon from "@/components/icons/BurgerCloseIcon.vue";
import { Switch } from "@headlessui/vue";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "NavigationPages",
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { Switch, BurgerCloseIcon, BurgerIcon },
  data: () => ({
    OpenBurger: false,
    DarkTheme: false,
  }),
  methods: {
    burgerMenu() {
      this.OpenBurger = !this.OpenBurger;
      if (this.OpenBurger) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    },
  },
};
</script>

<style scoped>
.nav_menu {
  @apply inline-block py-6 px-3 hover:text-purple-600;
}
ul .router-link-active {
  @apply border-b border-opacity-25 border-b-purple-800 text-purple-800;
}
.burger {
  @apply my-auto relative;
}
.open_burger {
  @apply fixed bg-gray-50 border px-5 py-2.5 left-0 w-full h-full;
  top: 68px;
}
.mobile_nav_list {
  @apply flex flex-col items-center;
}
</style>
