import { createAsyncThunk } from "@reduxjs/toolkit";
import CurrencyAPI from "@everapi/currencyapi-js";

export const getCurrency = createAsyncThunk(
  "currency",
  async (payload, { rejectWithValue }) => {
    const currencyApi = new CurrencyAPI(
      "cur_live_BvMDPTOFmQtA9n5nfjnHsUPz8mfNK9TKCeGohxbY"
    );
    const response = await currencyApi.latest({
      base_currency: "USD",
      currencies: ["EUR", "PLN"],
    });

    return response;
  }
);

export const changeCurrency = createAsyncThunk(
  "change.currency",
  async (payload) => {
    return payload;
  }
);
