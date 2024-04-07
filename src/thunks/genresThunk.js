import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const allGenres = createAsyncThunk("genres.all", async () => {
    const responce = await api.get('/genres')
    return responce.data
})

export const createGenres = createAsyncThunk('genres.create', async (payload) => {
    const responce = await api.post('/genres', payload)
    return responce.data
})

export const updateGenres = createAsyncThunk('genres.update', async (payload) => {
    const responce = await api.put(`/genres/${payload._id}`, payload)
    return responce.data
})

export const removeGenres = createAsyncThunk(
  "genres.remove",
  async (payload) => {
    const responce = await api.delete(`/genres/${payload._id}`, payload);
    return responce.data;
  }
);

