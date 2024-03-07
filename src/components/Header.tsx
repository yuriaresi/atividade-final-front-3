import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import pokemonLogo from "../image/pngegg.png";
import CatchingPokemonTwoToneIcon from "@mui/icons-material/CatchingPokemonTwoTone";
import { Badge } from "@mui/material";
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ImgStyled = styled("img")`
  width: 150px;
`;

const ToolbarStyled = styled(Toolbar)`
  display: flex;
  align-items: center;
  justify-content: center;

  #divImg {
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: end;
  }

  #divSearch {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 50%;
  }
`;

const AppBarStyled = styled(AppBar)`
  margin-bottom: 30px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="static">
        <ToolbarStyled>
          <div id="divImg">
            <ImgStyled src={pokemonLogo} alt="Pokemon Logo" />
          </div>

          <div id="divSearch">
            <Search style={{ marginRight: "100px" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Badge badgeContent={17} color="error">
              <CatchingPokemonTwoToneIcon style={{ marginRight: "5px" }} />
            </Badge>
          </div>
        </ToolbarStyled>
      </AppBarStyled>
    </Box>
  );
}
