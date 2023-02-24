<template>
  <div class="film_card" v-for="item in itemCard" :key="item.id">
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
      <div class="max-md:hidden">{{ item.overview }}</div>
      <div class="card_footer mt-5">
        <div class="date_card">{{ item.release_date }}</div>

        <div class="btn_card">
          <button class="btn watch_btn" @click="toggleWatchFilm(item.id)">
            {{ !item.watch ? "Watch" : "Watched" }}
          </button>
          <button class="btn delete_btn" @click="deleteFilms(item.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useFavoriteFilms } from "@/stores/getFavoriteFilms";
import { toRefs } from "vue";

export default {
  name: "FilmCard",
  props: { itemCard: Array },
  setup() {
    const FilmStore = useFavoriteFilms();
    const { toggleWatchFilm, deleteFilms } = toRefs(FilmStore);

    return {
      toggleWatchFilm,
      deleteFilms,
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
.delete_btn {
  @apply bg-red-600 active:bg-red-700 hover:bg-red-400 text-white;
}
.watch_btn {
  @apply bg-purple-500 active:bg-purple-600 hover:bg-purple-400 text-white;
}
.card_footer {
  @apply flex justify-between items-center;
}
</style>
