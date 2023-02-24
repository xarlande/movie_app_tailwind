<template>
  <div class="film_card" v-for="(item, idx) in movie_data" :key="idx">
    <div class="flex items-center justify-center basis-auto">
      <img
        class="rounded w-32 h-32"
        :src="
          item.poster_path
            ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
            : 'https://via.placeholder.com/150'
        "
        alt=""
      />
    </div>
    <div class="ml-5 basis-4/5">
      <div class="title_card">{{ item.title }}</div>
      <div>
        {{ item.overview }}
      </div>
      <div class="card_footer mt-5">
        <div class="date_card">{{ item.release_date }}</div>

        <div class="btn_card">
          <button class="btn watch_btn" @click="addToUserMovies(item)">
            {{ getMovieAdded(item) ? "Add" : "Added" }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFilmsMarket } from "@/stores/getFilmsMarket";
import { toRefs } from "vue";

export default {
  name: "SearchFilmCard",
  setup() {
    const FilmStore = useFilmsMarket();
    const { movie_data, addToUserMovies, getMovieAdded } = toRefs(FilmStore);

    return {
      movie_data,
      addToUserMovies,
      getMovieAdded,
    };
  },
};
</script>

<style scoped>
.film_card {
  @apply my-4 border rounded p-4 flex max-md:flex-col justify-between;
}
.btn {
  @apply rounded ml-2 p-2;
}
.watch_btn {
  @apply bg-purple-500 active:bg-purple-600 hover:bg-purple-400 text-white;
}
.card_footer {
  @apply flex justify-between items-center;
}
</style>
