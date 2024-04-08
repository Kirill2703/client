import { configureStore } from "@reduxjs/toolkit"
import CountryReducer from "../slices/countriesSlice"
import GenreReducer from "../slices/genresSlice";
import ActorReducer from "../slices/actorsSlice";
import TypeReducer from "../slices/typesSlice"
import FilmmakerReducer from "../slices/filmmakers";

const store = configureStore({
    reducer: {
        countries: CountryReducer,
        genres: GenreReducer,
        actors: ActorReducer,
        types: TypeReducer,
        filmmakers: FilmmakerReducer,
    }
})

export default store