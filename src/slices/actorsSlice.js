import { allActors, createActors, removeActors, updateActors } from "../thunks/actorsThunk"
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
            .addCase(createActors.fulfilled, (state, action) => {
            state.genres.push(action.payload)
          })
          .addCase(updateActors.fulfilled, (state, action) => {
            const { _id, name, surname } = action.payload.payload;
            const actor = state.actors.find((a) => a._id === _id);
              actor.name = name;
              actor.surname = surname;
            
          })
       .addCase(removeActors.fulfilled, (state, action) => {
            state.actors = state.actors.filter((a) => a._id !== action.payload._id)
          })
    }
})

export default actorSlice.reducer