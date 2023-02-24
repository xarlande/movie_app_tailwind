<template>
  <SearchFilmInput />
  <SearchFilmCard />
</template>

<script>
import SearchFilmInput from "@/components/SearchFilms/SearchFilmInput.vue";
import SearchFilmCard from "@/components/SearchFilms/SearchFilmCard.vue";

export default {
  name: "SearchFilms",
  components: { SearchFilmCard, SearchFilmInput },
};
</script>

<style scoped></style>
