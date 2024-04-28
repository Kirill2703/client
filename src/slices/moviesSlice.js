import { createSlice } from "@reduxjs/toolkit";
import {
  allMovies,
  createMovies,
  removeMovies,
  setMoviesDislikes,
  setMoviesLikes,
  updateMovies,
} from "../thunks/moviesThunk";

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
        const { _id } = action.payload.payload;

        state.movies = state.movies.map((g) => {
          if (g._id === _id) {
            return action.payload.movie;
          }
          return g;
        });
      })

      .addCase(removeMovies.fulfilled, (state, action) => {
        state.movies = state.movies.filter((g) => g._id !== action.payload._id);
      })

      .addCase(setMoviesLikes.fulfilled, (state, action) => {
        state.movies = state.movies.map((g) => {
          if (g._id === action.payload) {
            return { ...g, likes: g.likes + 1 };
          }
          return g;
        })
      })
         
         .addCase(setMoviesDislikes.fulfilled, (state, action) => {
       state.movies = state.movies.map((g) => {
         if (g._id === action.payload) {
           return {...g, dislikes: g.dislikes + 1};
         }
         return g;
       });
      });
  },
});

export default moviesSlice.reducer;
