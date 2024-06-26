import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const allMovies = createAsyncThunk("movies.all", async () => {
  const responce = await api.get("/movies");
  return responce.data;
});

export const createMovies = createAsyncThunk(
  "movies.create",
  async (payload) => {
    const responce = await api.post("/movies", payload);
    return responce.data;
  }
);

export const updateMovies = createAsyncThunk("movies.update", async (payload) => {
  const responce = await api.put(`/movies/${payload._id}`, payload);
  return { ...responce.data, payload };
});

export const removeMovies = createAsyncThunk("movies.remove", async (payload) => {
  const responce = await api.delete(`/movies/${payload}`);
  return { ...responce.data, _id: payload };
});

export const setMoviesLikes = createAsyncThunk(
  "movies.likes",
  async (payload) => {
    await api.get(`/movies/like/${payload.id}`);
    return payload.id;
  }
);

export const setMoviesDislikes = createAsyncThunk(
  "movies.dislikes",
  async (payload) => {
    await api.get(`/movies/dislike/${payload.id}`);
    return payload.id;
  }
);
