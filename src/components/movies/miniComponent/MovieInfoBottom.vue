<script lang="ts" setup>
// Imports
import { defineProps } from "vue";
import type { InfoMovie } from "@/model/movie.info.model";

// Para pasar los props al padre
const props = defineProps<{
  movie: InfoMovie;
}>();
</script>

<template>
  <div>
    <p><strong>Director: </strong> {{ props.movie?.Director }}</p>
    <p><strong>Writer: </strong> {{ props.movie?.Writer }}</p>
    <p><strong>Released: </strong> {{ props.movie?.Released }}</p>
    <p><strong>Country: </strong> {{ props.movie?.Country }}</p>
    <p><strong>Awards: </strong> {{ props.movie?.Awards }}</p>
    <p><strong>Supporting Actors: </strong> {{ props.movie?.Actors }}</p>
    <p><strong>Awards: </strong> {{ props.movie?.Awards }}</p>
    <p><strong>DVD: </strong> {{ props.movie?.DVD }}</p>
    <p><strong>BoxOffice: </strong> {{ props.movie?.BoxOffice }}</p>
    <p><strong>Production: </strong> {{ props.movie?.Production }}</p>
    <p><strong>Website: </strong> {{ props.movie?.Website }}</p>
    <p><strong>Response: </strong> {{ props.movie?.Response }}</p>
    <p v-if="props.movie.Ratings && props.movie?.Ratings.length > 0">
      <strong>Source: </strong> {{ props.movie?.Ratings[0].Source }}
    </p>
    <p v-if="props.movie.Ratings && props.movie?.Ratings.length > 1">
      <strong>Value: </strong> {{ props.movie?.Ratings[1].Value }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.movie-info-bottom {
  p {
    margin: 0;
    color: $white;
    padding: 5px;
    border-radius: 5px;
    text-overflow: ellipsis;
    border: 2px solid $primary;
    background-color: $secondary;
  }
}
</style>
