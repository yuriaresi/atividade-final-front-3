import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../models/Pokemon.model";
import { getPokemonById } from "../../services/api.services";

export const getPokemonThunk = createAsyncThunk('pokemon/getId', async (id: number) => {
    return await getPokemonById(id)


})

const pokemonSlice = createSlice({
    name: 'Pokemon',
    initialState: null as Pokemon | null,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getPokemonThunk.fulfilled, (_, action) => {
            return action.payload
        })
    }
})


export default pokemonSlice.reducer