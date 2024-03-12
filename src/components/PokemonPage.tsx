import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonThunk } from "../config/Modules/pokemon.slice";
import { useAppDispatch, useAppSelector } from "../config/hook";
import {
  Button,
  Container,
  Grid,
  Switch,
  Typography,
  styled,
} from "@mui/material";
import { Tabela } from "./Tabela";
import { mudarShiny } from "../config/Modules/shiny.slice";

const ContainerStyled = styled(Container)`
  * {
    font-family: "Bangers";
  }

  #tipo {
    display: flex;
    justify-content: center;
  }

  img {
    width: 250px;
  }

  #divImg {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  #gridHabilidades {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  #divHabilidades {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    font-size: 20px;
  }

  #botaoVoltar {
    display: flex;
    justify-content: end;
  }

  #titulo {
    display: flex;
    justify-content: center;
    margin: 20px;
    font-size: 70px;
    font-family: "Bangers";
  }
`;

export const PokemonPage = () => {
  const params = useParams();
  const dispatch = useAppDispatch();
  const pokemon = useAppSelector((state) => state.pokemon);
  const navigate = useNavigate();

  const shiny = useAppSelector((state) => state.shiny);

  useEffect(() => {
    if (!params.id) {
      return;
    }

    dispatch(getPokemonThunk(Number(params.id)));
  }, [params]);

  if (!pokemon) {
    return (
      <div>
        <p>Aguarde! Processando....</p>
      </div>
    );
  }

  const trocar = () => {
    dispatch(mudarShiny());
  };

  return (
    <>
      <ContainerStyled>
        <Typography id="titulo" gutterBottom>
          {pokemon.name}
        </Typography>

        <Grid container spacing={3}>
          <Grid  item xs={12} sm={9} md={7} xl={1}>
            <Tabela />
          </Grid>
          <Grid id="divImg" item xs={12} sm={3} md={4} xl={1}>
            <div style={{display: "flex", alignItems: "center"}}>
              <Switch onChange={trocar} />
              <p>{shiny ? "Normal" : "Shiny"}</p>
            </div>
            <img
              src={
                shiny
                  ? pokemon.sprites.front_default
                  : pokemon.sprites.front_shiny
              }
              alt="pokemon image"
            />
          </Grid>
 
          <Grid id="gridHabilidades" item xs={12} sm={3} md={6} xl={1}>
            <div id="divHabilidades">
              <Typography
                style={{ fontSize: "50px", fontFamily: "Bangers" }}
                gutterBottom
              >
                Habilidades
              </Typography>

              <ul>
                {pokemon.abilities.map((item, index) => (
                  <li key={index}>{item.ability.name}</li>
                ))}
              </ul>
            </div>
            <div id="botaoVoltar">
              <Button
                style={{ fontFamily: "Bangers" }}
                onClick={() => navigate("/")}
                variant="outlined"
              >
                Voltar
              </Button>
            </div>
          </Grid>
          <Grid item xs={12} sm={3} md={6} xl={1}>
            <Typography
              style={{
                display: "flex",
                justifyContent: "center",
                fontSize: "50px",
                fontFamily: "Bangers",
              }}
              gutterBottom
            >
              Tipo
            </Typography>

            <div id="tipo">
              {pokemon.types.map((item, index) => (
                <Typography
                  style={{ fontFamily: "Bangers" }}
                  variant="h5"
                  gutterBottom
                  key={index}
                >
                  {item.type.name}
                </Typography>
              ))}
            </div>
          </Grid>
        </Grid>
      </ContainerStyled>
    </>
  );
};
