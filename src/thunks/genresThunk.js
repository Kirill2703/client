import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const allGenres = createAsyncThunk("genres.all", async () => {
  const responce = await api.get("/genres");
  return responce.data;
});

export const createGenres = createAsyncThunk(
  "genres.create",
  async (payload) => {
    const responce = await api.post("/genres", payload);
    return responce.data;
  }
);

export const updateGenres = createAsyncThunk(
  "genres.update",
  async (payload) => {
    const responce = await api.put(`/genres/${payload._id}`, payload);
    return { ...responce.data, payload };
  }
);

export const removeGenres = createAsyncThunk(
  "genres.remove",
  async (payload) => {
    const responce = await api.delete(`/genres/${payload}`);
   return { ...responce.data, _id: payload };
  }
);

export const getGenre = createAsyncThunk("genres.get", async (payload) => {
  const responce = await api.get(`/genres/${payload.id}`);
  return responce.data;
});