<script lang="ts" setup>
import { defineProps } from "vue";
import type { InfoMovie } from "@/model/movie.info.model";

// Para pasar los props al padre
const props = defineProps<{
  movie?: InfoMovie;
}>();
</script>

<template>
  <div>
    <h2>{{ props.movie?.Title }}.</h2>
    <p><strong>Category: </strong> {{ props.movie?.Type }}</p>
    <p><strong>Year: </strong> {{ props.movie?.Year }}</p>
    <p><strong>Runtime: </strong> {{ props.movie?.Runtime }}</p>
    <p><strong>Genre: </strong> {{ props.movie?.Genre }}</p>
    <p v-if="props.movie?.TotalSeasons">
      <strong>Seasons: </strong> {{ props.movie?.TotalSeasons }}
    </p>
    <p><strong>Rated: </strong> {{ props.movie?.Rated }}</p>
    <p><strong>Trama: </strong> {{ props.movie?.Plot }}</p>
    <p><strong>Lenguaje: </strong> {{ props.movie?.Language }}</p>
  </div>
</template>

<style lang="scss" scoped>
.movie-info {
  h2 {
    color: $primary;
    font-size: 40px;
    margin-bottom: 10px;
  }

  strong {
    font-size: 20px;
    color: $primary;
  }

  p {
    color: $white;
    font-size: 18px;
  }
}
</style>
