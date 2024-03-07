export interface Pokemon{
    id: string
    name: string
    height: number
   sprites: PokemonSprites;
   abilities: PokemonAbilities []
   stats: PokemonStat []
   types: PokemonType []
}

export interface PokemonSprites{
    front_default: string
    front_shiny: string
}

export interface PokemonAbilities{
    ability: Ability
}

export interface Ability{
    name: string
}

export interface PokemonStat{
    base_stat: number
    stat: Stat

}

export interface Stat{
    name: string
}


export interface PokemonType{
    type: Type
}

export interface Type {
    name: string
}