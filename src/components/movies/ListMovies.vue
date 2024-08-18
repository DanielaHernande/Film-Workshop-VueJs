<template>
    <div class="container-movies d-middle p-100">

       <CardMovie 
            v-for="movie in store.listMovies"
            v-if="store.listMovies"
            :id="movie.imdbID"
            :poster="movie.Poster"
            :title="movie.Title"
            :year="movie.Year"
            :type="movie.Type"
       />
       <div class="d-middle w-100 ccc" v-else>
            <p>No hay resultados en la busqueda</p>
            <img src="https://media.tenor.com/IHdlTRsmcS4AAAAM/404.gif" alt="dd">
       </div>

    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue'

import CardMovie from "@/components/movies/CardMovie.vue"
import { useMoviesStore } from "@/store/movies.store"

const store = useMoviesStore()
onMounted(()=> {
    console.log('ListMovies mounted')
    fetchMovies()
})

async function  fetchMovies() {
  await store.getMovies()
}   

</script>

<style scoped lang="scss">
.container-movies {
    flex-wrap: wrap;
    gap: 20px
}

p{
    color: $white;
}

.ccc {

    background-color: black;

    p {
        color: $white;
        font-size: 20px;
        margin-right: 20px;
    }
}
</style>    