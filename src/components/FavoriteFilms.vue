<template>
  <div class="film_list">
    <h2 class="text-center">
      Watched film (Length: {{ watchedMovies.length }})
    </h2>
    <div class="film_cards">
      <FilmCard v-if="watchedMovies.length > 0" :item-card="watchedMovies" />
      <div v-else class="mt-2 text-sm text-center">It`s list empty</div>
    </div>
  </div>
  <div class="mt-10">
    <h2 class="text-center">All film (Length: {{ favoriteMovie.length }})</h2>
    <div class="film_cards">
      <FilmCard v-if="favoriteMovie.length > 0" :item-card="favoriteMovie" />
      <div v-else class="mt-2 text-sm text-center">It`s list empty</div>
    </div>
  </div>
</template>

<script>
import FilmCard from "@/components/FavoriteFilms/FilmCard.vue";
import { useFavoriteFilms } from "@/stores/getFavoriteFilms";
import { toRefs } from "vue";

export default {
  name: "FavoriteFilms",
  components: { FilmCard },
  setup() {
    const filmStore = useFavoriteFilms();
    const { favoriteMovie, deleteFilms, toggleWatchFilm, watchedMovies } =
      toRefs(filmStore);

    return {
      favoriteMovie,
      deleteFilms,
      toggleWatchFilm,
      watchedMovies,
    };
  },
};
</script>

<style scoped></style>
