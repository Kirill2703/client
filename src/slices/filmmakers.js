import { allFilmmakers } from "../thunks/filmmakersThunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filmmakers: [],
};

const filmmakerSlice = createSlice({
  name: "filmmakers",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(allFilmmakers.fulfilled, (state, action) => {
      state.filmmakers = action.payload;
    });
  },
});

export default filmmakerSlice.reducer;
