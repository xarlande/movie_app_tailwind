<template>
  <div class="film_list">
    <div class="inline-block mx-auto">Watched film (0 count)</div>
    <div class="film_cards">
      <film-card />
    </div>
  </div>
  <div class="film_list">
    All film
    <div class="film_cards">
      <film-card />
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/FavoriteFilms/FilmCard.vue";

export default {
  name: "FavoriteFilms",
  components: { FilmCard },
};
</script>

<style scoped></style>
