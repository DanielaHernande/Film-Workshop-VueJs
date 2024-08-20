<script lang="ts" setup>

// Imports 
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useMoviesStore } from '@/store/movies.store';
import MovieInfo from './miniComponent/MovieInfo.vue';
import MovieInfoBottom from './miniComponent/MovieInfoBottom.vue';

// Para la ruta obtener la ruta
const routa = useRoute();

// Pra obtner la pelicula
const storeMovies = useMoviesStore();

// Para la pelicula seleccioanda
const selectMovie = computed(() => storeMovies.movieInformation);

onMounted(async () => {
    try {
        storeMovies.getMoviesId(routa.params.id as string); 
    } catch (error) {
        console.error("Error movie:", error)
    }
});

</script>

<template>
    <div class="details-movie">

        <div class="details-content">
            <div class="image-movie">
                <img :src="selectMovie?.Poster" :alt="selectMovie?.Title">
            </div>
    
            <div class="movie-info">
                <MovieInfo v-if="selectMovie" :movie="selectMovie" />
            </div>
        </div>

        <div class="movie-info-bottom">
            <MovieInfoBottom v-if="selectMovie" :movie="selectMovie" />
        </div>
    </div>
</template>

<style lang="scss" scoped>

.details-movie {
    display: flex;
    flex-direction: column;
    padding: 50px;

}

.details-content {
    display: flex;
    margin-right: 20px;
}

.image-movie {

    width: 20%;
    margin-right: 20px;
    border-radius: 10px;
    border: 3px solid $primary;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
}

.movie-info {

    padding: 10px;
    flex: 1;
}

</style>