import { configureStore } from "@reduxjs/toolkit"
import CountryReducer from "../slices/countriesSlice"

const store = configureStore({
    reducer: {
        countries: CountryReducer
    }
})

export default store