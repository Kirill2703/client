import { allActors } from "../thunks/actorsThunk"
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    actors: []
}

const actorSlice = createSlice({
    name: 'actors',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(allActors.fulfilled, (state, action) => {
            state.actors = action.payload
        })
    }
})

export default actorSlice.reducer