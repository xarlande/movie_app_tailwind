<script setup>
import { RouterView } from "vue-router";
import NavigationPages from "@/components/NavigationPages.vue";
</script>

<template>
  <div class="bg-gray-50">
    <header class="px-10 border-b">
      <div class="max-w-4xl mx-auto flex justify-between">
        <NavigationPages />
      </div>
    </header>

    <RouterView />
  </div>
</template>

<style scoped></style>
