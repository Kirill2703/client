import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";
import { getToken, removeToken } from "../helpers/token";

export const register = createAsyncThunk('register', async (payload, {rejectWithValue}) => {
    try {
        const response = await api.post('/register', payload)
        return response.data
    }
    catch (error){
        return rejectWithValue(error.response.data);
    }
})

export const login= createAsyncThunk(
  "login",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/login", payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getAuthUser = createAsyncThunk(
  "getAuthUser",
  async (payload, { rejectWithValue }) => {
    try {
      const token = getToken()
      api.defaults.headers.Authorization = `Bearer ${token}`
      const response = await api.get("/auth-user");
      return response.data;
    }
    catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const logout = createAsyncThunk('logout', async () => {
  
  removeToken()
}
)

export const activate = createAsyncThunk(
  "register",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post("/activate", payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);