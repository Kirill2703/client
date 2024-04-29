import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const allActors = createAsyncThunk("actors.all", async () => {
  const responce = await api.get("/actors");
  return responce.data;
});

export const createActors = createAsyncThunk(
  "actors.create",
  async (payload) => {
    const responce = await api.post("/actors", payload);
    return responce.data;
  }
);

export const updateActors = createAsyncThunk(
  "actors.update",
  async (payload) => {
    const responce = await api.put(`/actors/${payload._id}`, payload);
    return { ...responce.data, payload };
  }
);

export const removeActors = createAsyncThunk(
  "actors.remove",
  async (payload) => {
    const responce = await api.delete(`/actors/${payload}`);
    console.log({ ...responce.data, _id: payload });
    return { ...responce.data, _id: payload };
  }
);

export const getActor = createAsyncThunk("actors.get", async (payload) => {
  const responce = await api.get(`/actors/${payload.id}`);
  return responce.data;
  
});
