import { Pagination } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../config/hook";
import { setPagina } from "../config/Modules/paginacao.slice";
import { ListPokemonThunk } from "../config/Modules/pokemons.slice";

export const Paginacao = () => {
  const paginacao = useAppSelector((state) => state.paginacao);
  const dispatch = useAppDispatch();

  const numPaginas = Math.floor(paginacao.count / paginacao.itensPorPagina) + 1;

  const mudarPagina = (_: any, pagina: number) => {
    dispatch(setPagina(pagina));
    dispatch(ListPokemonThunk());
  };

  return (
    <Pagination
      onChange={mudarPagina}
      count={numPaginas}
      page={paginacao.paginaAtual}
      color="secondary"
      sx={{
        alignItems: "center",
        display: "flex",
        justifyContent: "center",
        m: 2,
      }}
    />
  );
};
