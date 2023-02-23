<script setup>
import { RouterView } from "vue-router";
import NavigationPages from "@/components/NavigationPages.vue";
</script>

<template>
  <div>
    <header class="px-10 border-b">
      <div class="max-w-4xl mx-auto flex justify-between">
        <NavigationPages />
      </div>
    </header>
    <main class="max-w-4xl mx-auto px-3 my-5 text-gray-500 font-semibold">
      <RouterView />
    </main>
  </div>
</template>

<style scoped></style>
