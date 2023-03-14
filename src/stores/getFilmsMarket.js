import { defineStore } from "pinia";
import { useFavoriteFilms } from "@/stores/getFavoriteFilms";
const api_key = "ee52fd28bd25dda214a5330a1eea558f";

export const useFilmsMarket = defineStore("searchFilms", {
  state() {
    return {
      movie_data: {},
    };
  },
  getters: {
    getMovieAdded() {
      const movieStore = useFavoriteFilms();
      const movieFavoriteStore = movieStore.favoriteMovie;
      return (obj) => {
        return (
          movieFavoriteStore.filter((favObj) => favObj.id === obj.id).length ===
          0
        );
      };
    },
  },
  actions: {
    async getFilm(s) {
      if (s) {
        const api_url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${s}\n`;
        const res = await fetch(`${api_url}`);
        const data = await res.json();
        this.movie_data = data.results;
      }
    },
    addToUserMovies(obj) {
      const movieStore = useFavoriteFilms();
      const movieFavoriteStore = movieStore.favoriteMovie;
      if (this.getMovieAdded(obj)) {
        movieFavoriteStore.push({ ...obj, watch: false });
      }
    },
  },
});
