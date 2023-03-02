<template>
  <div class="flex justify-between">
    <input
      class="text-center px-10 rounded border"
      type="text"
      placeholder="Enter a movie"
      v-model="searchInput"
      @keyup.enter="getFilm(searchInput)"
    />
    <button
      class="p-2 bg-purple-500 active:bg-purple-600 hover:bg-purple-400 text-white rounded"
      @click="getFilm(searchInput)"
    >
      Search
    </button>
  </div>
</template>

<script>
import { useFilmsMarket } from "@/stores/getFilmsMarket";
import { toRefs } from "vue";

export default {
  name: "SearchFilmInput",
  setup() {
    const filmsStore = useFilmsMarket();
    const { movie_data, getFilm } = toRefs(filmsStore);

    return {
      movie_data,
      getFilm,
    };
  },
  data: () => ({
    searchInput: "",
  }),
  watch: {
    movie_data() {
      this.searchInput = "";
    },
  },
};
</script>

<style scoped></style>
