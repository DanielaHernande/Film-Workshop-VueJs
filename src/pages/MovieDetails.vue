<template>
    <StartButton />
    <h1>DETALLES DE LA PELICULA ID {{ movieId }}</h1>

    <InforMovie />
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
// Import btn start
import StartButton from '@/components/button/StartButton.vue';

// Import Infor Movie
import InforMovie from '@/components/movies/InforMovie.vue';

const route = useRoute()
const movieId = route.params.id as string
</script>

<style lang="scss" scoped>
h1 {
    color: $white;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>