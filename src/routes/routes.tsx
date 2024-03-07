import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { PokemonPage } from "../components/PokemonPage";

export const routes = createBrowserRouter([{ path: "/", element: <Home /> }, {path: "/pokemon/:id", element: <PokemonPage />}]);
