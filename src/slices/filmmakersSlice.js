import { allFilmmakers, createFilmmakers, removeFilmmakers, updateFilmmakers } from "../thunks/filmmakersThunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filmmakers: [],
};

const filmmakerSlice = createSlice({
  name: "filmmakers",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allFilmmakers.fulfilled, (state, action) => {
      state.filmmakers = action.payload;
      })
    .addCase(createFilmmakers.fulfilled, (state, action) => {
            state.filmmakers.push(action.payload)
          })
          .addCase(updateFilmmakers.fulfilled, (state, action) => {
            const { _id, name, surname } = action.payload.payload;
            const filmmaker = state.filmmakers.find((f) => f._id === _id);
              filmmaker.name = name;
              filmmaker.surname = surname;
          })
       .addCase(removeFilmmakers.fulfilled, (state, action) => {
            state.filmmakers = state.filmmakers.filter((f) => f._id !== action.payload._id)
          })
  },
});

export default filmmakerSlice.reducer;
