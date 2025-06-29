import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Nosotros from "./components/Nosotros";
import Especialidades from "./components/ItemListContainer/Especialidades";
import Error from "./components/Error";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemListContainer/ItemDetailContainer";
import Cart from "./components/CartWidget/Cart";
import CompraConfirmada from "./components/CartWidget/CompraConfirmada";
import { DataContextProvider } from "./context/context";

function App() {
  return (
    <>
      <BrowserRouter>
        <DataContextProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/productos" element={<Especialidades />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart/confirm" element={<CompraConfirmada />} />
              <Route
                path="/productos/:especialidades"
                element={<ItemListContainer />}
              />
              <Route
                path="/productos/:especialidades/:producto"
                element={<ItemDetailContainer />}
              />
              <Route path="/*" element={<Error />} />
            </Route>
          </Routes>
        </DataContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
