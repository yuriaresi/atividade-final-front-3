import { Provider } from "react-redux";
import { store } from "./config/store";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes}>
          
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
