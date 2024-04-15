import { allTypes, createTypes, removeTypes, updateTypes } from "../thunks/typesThunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [],
};

const typeSlice = createSlice({
  name: "types",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(allTypes.fulfilled, (state, action) => {
        state.types = action.payload;
      })
      .addCase(createTypes.fulfilled, (state, action) => {
        state.genres.push(action.payload);
      })
      .addCase(updateTypes.fulfilled, (state, action) => {
        // const updated = action.payload.payload
        const { _id, title } = action.payload.payload;
        const type = state.types.find((t) => t._id === _id);
        type.title = title;
        // state.genres = action.payload;
      })
      .addCase(removeTypes.fulfilled, (state, action) => {
        state.types = state.types.filter((t) => t._id !== action.payload._id);
      });
  },
});

export default typeSlice.reducer;
