import { createSlice } from "@reduxjs/toolkit"
import { allGenres } from "../thunks/genresThunk"


const initialState = {
    genres: []
}

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(allGenres.fulfilled, (state, action) => { state.genres = action.payload })
    }
})

export default genreSlice.reducer