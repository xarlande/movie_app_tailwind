<template>
  <div class="film_card">
    <div class="flex items-center justify-center basis-auto">
      <img class="rounded-full" src="https://via.placeholder.com/150" alt="" />
    </div>
    <div class="ml-5 basis-4/5">
      <div class="title_card">Batman</div>
      <div class="max-md:hidden">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet
        aspernatur assumenda explicabo, iusto laudantium magnam minima minus,
        molestias nesciunt, obcaecati odit officia officiis perferendis
        quibusdam similique sint vero! Modi, odit.
      </div>
      <div class="card_footer mt-5">
        <div class="date_card">20.20.2002</div>

        <div class="btn_card">
          <button class="btn watch_btn">Watch</button>
          <button class="btn delete_btn">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmCard",
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
