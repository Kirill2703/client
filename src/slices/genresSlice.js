import { createSlice } from "@reduxjs/toolkit"
import { allGenres, createGenres, removeGenres, updateGenres } from "../thunks/genresThunk"


const initialState = {
    genres: []
}

const genreSlice = createSlice({
    name: 'genres',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(allGenres.fulfilled, (state, action) => {
            state.genres = action.payload;
          })
          .addCase(createGenres.fulfilled, (state, action) => {
            state.genres.push(action.payload)
          })
          .addCase(updateGenres.fulfilled, (state, action) => {
            // const updated = action.payload.payload
            const { _id, title } = action.payload.payload;
            const genre = state.genres.find((g) => g._id === _id);
            genre.title = title;
            // state.genres = action.payload;
          })
       .addCase(removeGenres.fulfilled, (state, action) => {
            state.genres = state.genres.filter((g) => g._id !== action.payload._id)
          })
    }
})

export default genreSlice.reducer