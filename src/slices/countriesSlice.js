import { createSlice } from "@reduxjs/toolkit";
import { allCountries } from "../thunks/countriesThunk";

const initialState = {
    countries: []
}

const countrySlice = createSlice({
    name: 'countries',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(allCountries.fulfilled, (state, action) => {
                state.countries = action.payload
            })
    }
})

export default countrySlice.reducer