<template>
  <div class="film_list">
    <div class="inline-block mx-auto">
      Watched film {{ watchedMovies.length }}
    </div>
    <div class="film_cards">
      <FilmCard :item-card="watchedMovies" />
    </div>
  </div>
  <div class="film_list">
    All film ({{ favoriteMovie.length }})
    <div class="film_cards">
      <FilmCard :item-card="favoriteMovie" />
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
