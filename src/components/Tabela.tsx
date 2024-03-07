import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useAppSelector } from "../config/hook";
import { styled } from "@mui/material";

const TableContainerStyled = styled(TableContainer)`

  background-color: #242424;
  border: 1px solid white;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

`;

export const Tabela = () => {
  const pokemon = useAppSelector((state) => state.pokemon);

  return (
    <TableContainerStyled>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {pokemon?.stats.map((item, index) => (
              <TableCell key={index} style={{ color: "white", fontFamily: "bangers" }}>{item.stat.name}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemon?.stats.map((item, index) => (
            <TableCell key={index} style={{ color: "white", fontFamily: "bangers" }} >{item.base_stat}</TableCell>
          ))}
        </TableBody>
      </Table>
    </TableContainerStyled>
  );
};
