import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index";

export const allTypes = createAsyncThunk("types.all", async () => {
  const responce = await api.get("/types");
  return responce.data;
});

export const createTypes = createAsyncThunk(
  "types.create",
  async (payload) => {
    const responce = await api.post("/types", payload);
    return responce.data;
  }
);

export const updateTypes = createAsyncThunk(
  "types.update",
  async (payload) => {
    const responce = await api.put(`/types/${payload._id}`, payload);
    return { ...responce.data, payload };
  }
);

export const removeTypes = createAsyncThunk(
  "types.remove",
  async (payload) => {
    const responce = await api.delete(`/types/${payload}`);
    return { ...responce.data, _id: payload };
  }
);

export const getType = createAsyncThunk("types.get", async (payload) => {
  const responce = await api.get(`/types/${payload.id}`);
  return responce.data;
});
