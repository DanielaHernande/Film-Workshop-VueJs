<script lang="ts" setup>

// Imports 
import { useRoute } from 'vue-router';
import { onMounted, computed } from 'vue';
import { useMoviesStore } from '@/store/movies.store';

// Para la ruta obtener la ruta
const routa = useRoute();

// Pra obtner la pelicula
const storeMovies = useMoviesStore();

// Para la pelicula seleccioanda
const selectMovie = computed(() => storeMovies.movieInformation);

onMounted(() => {
    storeMovies.getMoviesId(routa.params.id as string);
});

</script>

<template>
    <div class="details-movie">

        <div class="details-content">
            <div class="image-movie">
                <img :src="selectMovie?.Poster" :alt="selectMovie?.Title">
            </div>
    
            <div class="movie-info">
                <h2>{{ selectMovie?.Title }}.</h2>
                <p><strong>Category: </strong> {{ selectMovie?.Type }}</p>
                <p><strong>Year: </strong> {{ selectMovie?.Year }}</p>
                <p><strong>Runtime: </strong> {{ selectMovie?.Runtime }}</p>
                <p><strong>Genre: </strong> {{ selectMovie?.Genre }}</p>
                <p><strong>Seasons: </strong> {{ selectMovie?.TotalSeasons }}</p>
                <p><strong>Rated: </strong> {{ selectMovie?.Rated }}</p>
                <p><strong>Trama: </strong> {{ selectMovie?.Plot }}</p>
                <p><strong>Lenguaje: </strong> {{ selectMovie?.Language }}</p>
            </div>
        </div>

        <div class="movie-info-bottom">
            <p><strong>Director: </strong> {{ selectMovie?.Director }}</p>
            <p><strong>Writer: </strong> {{ selectMovie?.Writer }}</p>
            <p><strong>Released: </strong> {{ selectMovie?.Released }}</p>
            <p><strong>Country: </strong> {{ selectMovie?.Country }}</p>
            <p><strong>Awards: </strong> {{ selectMovie?.Awards }}</p>
            <p><strong>Supporting Actors: </strong> {{ selectMovie?.Actors }}</p>
            <p><strong>Awards: </strong> {{ selectMovie?.Awards }}</p>
            <p><strong>DVD: </strong> {{ selectMovie?.DVD }}</p>
            <p><strong>BoxOffice: </strong> {{ selectMovie?.BoxOffice }}</p>
            <p><strong>Production: </strong> {{ selectMovie?.Production }}</p>
            <p><strong>Website: </strong> {{ selectMovie?.Website }}</p>
            <p><strong>Response: </strong> {{ selectMovie?.Response }}</p>
            <p v-if="selectMovie?.Ratings && selectMovie?.Ratings.length > 0"><strong>Source: </strong> {{ selectMovie?.Ratings[0].Source }}</p>
            <p v-if="selectMovie?.Ratings && selectMovie?.Ratings.length > 1"><strong>Value: </strong> {{ selectMovie?.Ratings[1].Value }}</p>
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

.movie-info-bottom {

    gap: 10px;
    display: grid;
    margin-top: 20px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

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