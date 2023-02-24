import { defineStore } from "pinia";

export const useFavoriteFilms = defineStore("favoriteFilms", {
  state: () => ({
    favoriteMovie: [],
  }),
  getters: {
    watchedMovies() {
      return this.favoriteMovie.filter((arr) => arr.watch);
    },
  },
  actions: {
    deleteFilms(id) {
      this.favoriteMovie = this.favoriteMovie.filter((arr) => arr.id !== id);
    },
    toggleWatchFilm(id) {
      this.favoriteMovie.map((movie) => {
        if (movie.id === id) {
          movie.watch = !movie.watch;
        }
      });
    },
  },
});
