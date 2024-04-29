import { createSlice } from "@reduxjs/toolkit"
import { changeCurrency, getCurrency } from "../thunks/currencyThunk"
import { activate } from "../thunks/authThunk"


const initialState = {
    currency: {},
    active: 'USD',
    loading: null
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCurrency.fulfilled, (state, action) => {
            action.payload.data.USD = {code: 'USD', value: 1}
            state.currency = action.payload
            state.loading = true
        })
        builder.addCase(changeCurrency.fulfilled, (state, action) => {
            state.active = action.payload
        })
    }

})

export default currencySlice.reducer