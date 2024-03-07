import axios from "axios";
import { PokemonList } from "../models/pokemon-list.model";
import { Pokemon } from "../models/Pokemon.model";


const api = axios.create({
    baseURL: "https://pokeapi.co/api/v2/"
})

export async function ListPokemons(limit: Number, offset: number) {
    try {
        const result = await api.get(`/pokemon?Limit=${limit}&offset=${offset}`);
        return result.data as PokemonList
    }
    catch (error: any) {
        alert(error.toString())
        console.log(error)
        return null

    }
}


export async function getPokemonByUrl(url: string) {
    try {
        const result = await axios.get(url);
        return result.data as Pokemon
    }
    catch (error: any) {
        alert(error.toString())
        console.log(error)
        return null

    }
}


export async function getPokemonById(id: number) {
    try {
        const result = await api.get(`/pokemon/${id}`);
        return result.data as Pokemon
    }
    catch (error: any) {
        alert(error.toString())
        console.log(error)
        return null

    }
}