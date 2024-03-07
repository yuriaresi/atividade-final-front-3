import { combineReducers } from "@reduxjs/toolkit";
import paginacaoSlice from "./Modules/paginacao.slice";
import pokemonsSlice from "./Modules/pokemons.slice";
import pokemonSlice from "./Modules/pokemon.slice";
import shinySlice from "./Modules/shiny.slice";

export const rootReducer = combineReducers(
    {
        paginacao: paginacaoSlice,
        pokemons: pokemonsSlice,
        pokemon: pokemonSlice,
        shiny: shinySlice
    });