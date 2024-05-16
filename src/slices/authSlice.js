import { createSlice } from "@reduxjs/toolkit";
import { getAuthUser, login, logout } from "../thunks/authThunk";
import { getToken, setToken } from "../helpers/token";

const initialState = {
  token: null,
  userData: {},
  loading: false,
  error: null,
};

export const authSlices = createSlice({
  name: "Auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
        setToken(action.payload.token);
        state.error = null
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = "rejected";
        state.error = action.payload.message;
      })

      .addCase(getAuthUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAuthUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
        state.token = getToken();
      })
      .addCase(getAuthUser.rejected, (state, action) => {
        state.loading = "rejected";
        // state.error = action.payload.message;
      })

      .addCase(logout.fulfilled, (state) => {
        state.token = null;
        state.userData = {};
        state.loading = false;
        state.error = null;
      });
  },
});

export default authSlices.reducer;
