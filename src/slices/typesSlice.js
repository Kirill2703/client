import { allTypes } from "../thunks/typesThunk";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  types: [],
};

const typeSlice = createSlice({
  name: "types",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(allTypes.fulfilled, (state, action) => {
      state.types = action.payload;
    });
  },
});

export default typeSlice.reducer;
