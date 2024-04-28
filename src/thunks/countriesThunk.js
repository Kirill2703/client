import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../api/index"

export const allCountries = createAsyncThunk('countries.all', async () => {
    const responce = await api.get('/countries')
    return responce.data
})

export const createCountries = createAsyncThunk("countries.create", async (payload) => {
  const responce = await api.post("/countries", payload);
  return responce.data;
});

export const getCountry = createAsyncThunk("countries.get", async (payload) => {
  const responce = await api.get(`/countries/${payload.id}`);
  return responce.data;
});