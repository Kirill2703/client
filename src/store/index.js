import { configureStore } from "@reduxjs/toolkit"
import CountryReducer from "../slices/countriesSlice"
import GenreReducer from "../slices/genresSlice";
import ActorReducer from "../slices/actorsSlice";
import TypeReducer from "../slices/typesSlice"
import FilmmakerReducer from "../slices/filmmakersSlice";
import MovieReducer from '../slices/moviesSlice'
import authReducer from "../slices/authSlice";
import currencyReducer from "../slices/currencySlice";

const store = configureStore({
    reducer: {
        countries: CountryReducer,
        genres: GenreReducer,
        actors: ActorReducer,
        types: TypeReducer,
        filmmakers: FilmmakerReducer,
        movies: MovieReducer,
        auth: authReducer,
        currency: currencyReducer,
    }
})

export default store