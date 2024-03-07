import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActions, IconButton } from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import styled from "styled-components";
import { Pokemon } from "../models/Pokemon.model";
import { useNavigate } from "react-router-dom";

const CardActionsStyled = styled(CardActions)`
  display: flex;
  justify-content: space-between;
  a {
    color: black;
  }
  a:hover {
    cursor: pointer;
    
    color: rgb(25, 118, 210);
  }
`;





interface CardProps {
  pokemon: Pokemon;
}

export default function CardPokemon(props: CardProps) {
  const navigate = useNavigate();

  return (
    <Card>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      >
        <CardMedia
          style={{ width: "170px" }}
          component="img"
          height="140"
          image={props.pokemon.sprites.front_default}
          alt={props.pokemon.name}
        />
      </div>

      <CardContent>
        <Typography
          style={{ display: "flex", justifyContent: "center" }}
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          <p style={{fontWeight: 'bold'}}>Nome</p>: {props.pokemon.name}
        </Typography>

        <Typography
          style={{ display: "flex", justifyContent: "center" }}
          gutterBottom
          variant="h5"
          component="div"
          textAlign="center"
        >
          <p style={{fontWeight: 'bold'}}>Tamanho</p>: {props.pokemon.height}
        </Typography>
      </CardContent>
      <CardActionsStyled>
        <IconButton>
          <CatchingPokemonIcon style={{ fontSize: "35" }} />
        </IconButton>
        <a onClick={() => navigate(`pokemon/${props.pokemon.id}`)}>
          Mais informações
        </a>
      </CardActionsStyled>
    </Card>
  );
}
