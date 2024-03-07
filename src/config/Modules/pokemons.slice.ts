import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Pokemon } from "../../models/Pokemon.model";
import { ListPokemons, getPokemonByUrl } from "../../services/api.services";
import { setCount } from "./paginacao.slice";
import { RootState } from "../store";


export const ListPokemonThunk = createAsyncThunk('pokemons/listPokemons', async (_, config) => {
    
    const state = config.getState() as RootState

    const limit = state.paginacao.itensPorPagina
    const offset = state.paginacao.itensPorPagina * (state.paginacao.paginaAtual - 1)
    
    const basicList = await ListPokemons(limit, offset)
    if (!basicList) {
        return [];
    }
    config.dispatch(setCount(basicList.count))
    const pokemons: Pokemon[] = [];

    for (let pokemonItem of basicList.results) {

        const pokemon = await getPokemonByUrl(pokemonItem.url);

        if (pokemon != null) {
            pokemons.push(pokemon)
        }

    }
    return pokemons
})

const pokemonsSlice = createSlice({
    name: 'pokemons',
    initialState: [] as Pokemon[],
    reducers: {
        
    },
    extraReducers:(builder) => {
        builder.addCase(ListPokemonThunk.fulfilled,(_, action) =>{
            return action.payload
        })
    }
},);

export default pokemonsSlice.reducer;
