import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const allFilmmakers = createAsyncThunk("filmmakers.all", async () => {
  const responce = await api.get("/filmmakers");
  return responce.data;
});

export const createFilmmakers = createAsyncThunk("filmmakers.create", async (payload) => {
  const responce = await api.post("/filmmakers", payload);
  return responce.data;
});

export const updateFilmmakers = createAsyncThunk(
  "filmmakers.update",
  async (payload) => {
    const responce = await api.put(`/filmmakers/${payload._id}`, payload);
    return { ...responce.data, payload };
  }
);

export const removeFilmmakers = createAsyncThunk(
  "filmmakers.remove",
  async (payload) => {
    const responce = await api.delete(`/filmmakers/${payload}`);
    console.log({ ...responce.data, _id: payload });
    return { ...responce.data, _id: payload };
  }
);

export const getFilmmaker = createAsyncThunk("filmmakers.get", async (payload) => {
  const responce = await api.get(`/filmmakers/${payload.id}`);
  return responce.data;
});
