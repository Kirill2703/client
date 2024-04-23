import { createSlice } from "@reduxjs/toolkit";
import { allMovies, createMovies, removeMovies, updateMovies } from "../thunks/moviesThunk";

const initialState = {
  movies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
      })
      .addCase(createMovies.fulfilled, (state, action) => {
        state.movies.push(action.payload);
      })
      .addCase(updateMovies.fulfilled, (state, action) => {
        const { _id} = action.payload.payload;
        
        state.movies = state.movies.map((g) => {
          if (g._id === _id) {
            return action.payload.movie
          }
          return g
        })
      })
          
      .addCase(removeMovies.fulfilled, (state, action) => {
        state.movies = state.movies.filter((g) => g._id !== action.payload._id);
      });
  },
});

export default moviesSlice.reducer;
