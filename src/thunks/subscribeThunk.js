import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api";


export const getSubscribeUser = createAsyncThunk(
  "getsubscribe",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.get(`/subscribe/${payload}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const setSubscribeUser = createAsyncThunk(
  "setsubscribe",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await api.post(`/subscribe`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
