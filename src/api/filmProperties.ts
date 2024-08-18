import { computed } from "vue";
import type { InfoMovie } from "@/model/movie.info.model";

export function useFilmProperties(selectMovie: InfoMovie | null) {

    const mainProperties = computed(() => [
        {label: "Category", value: selectMovie?.Type},
        {label: "Year", value: selectMovie?.Year},
        {label: "Runtime", value: selectMovie?.Runtime},
        {label: "Genre", value: selectMovie?.Genre},
        {label: "Seasons", value: selectMovie?.TotalSeasons},
        {label: "Rated", value: selectMovie?.Rated},
        {label: "Trama", value: selectMovie?.Plot},
        {label: "Lenguaje", value: selectMovie?.Language},
    ]);

    const additionalProperties = computed(() => [
        {label: "Director", value: selectMovie?.Director},
        {label: "Writer", value: selectMovie?.Writer},
        {label: "Released", value: selectMovie?.Released},
        {label: "Country", value: selectMovie?.Country},
        {label: "Awards", value: selectMovie?.Awards},
        {label: "Supporting Actors", value: selectMovie?.Actors},
        {label: "DVD", value: selectMovie?.DVD},
        {label: "BoxOffice", value: selectMovie?.BoxOffice},
        {label: "Production", value: selectMovie?.Production},
        {label: "Website", value: selectMovie?.Website},
        {label: "Response", value: selectMovie?.Response},
        {label: "Source", value: selectMovie?.Ratings[0].Source},
        {label: "Value", value: selectMovie?.Ratings[1].Value},
    ]);

    return { mainProperties, additionalProperties };
};