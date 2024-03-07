import { useEffect } from "react";
import Header from "../components/Header";
import { Container, Grid } from "@mui/material";
import { Paginacao } from "../components/Paginacao";

import { useAppDispatch, useAppSelector } from "../config/hook";
import { ListPokemonThunk } from "../config/Modules/pokemons.slice";
import CardPokemon from "../components/CardComponent";

export const Home = () => {

  const dispatch = useAppDispatch()
  const pokemons = useAppSelector((state)=> state.pokemons)

  useEffect(()=>{
    dispatch(ListPokemonThunk())
  },[])


  return (
    <>
      <Header />
      <Container>
        <Paginacao />
        <Grid container spacing={2}>
          {pokemons.map((item) => (
            <Grid item xs={12} sm={4} md={4} xl={1} key={item.id}>
              <CardPokemon pokemon={item} />
            </Grid>
          ))}
        </Grid>
        <Paginacao />
      </Container>
    </>
  );
};
