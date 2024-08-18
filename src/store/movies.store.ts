import type { Movie } from "@/model/movie.model";
import HTTP from "@/api/client-http"
import { defineStore } from "pinia";
import type { InfoMovie } from "@/model/movie.info.model";

export const useMoviesStore = defineStore('movies', {
    state: () => ({
        listMovies: [] as  Movie[],
        movieInformation: null as InfoMovie | null
    }),
    actions: {
        async getMovies(search:string = 'movies'){
            const resp =  await HTTP.get('',{
                params: {
                    s: search
                }
            })
            this.listMovies = resp.data.Search;
        },

        async getMoviesId(id:string){
            const resp =  await HTTP.get('',{
                params: {
                    i: id
                }
            })
            this.movieInformation = resp.data as InfoMovie;
        },
    }
})