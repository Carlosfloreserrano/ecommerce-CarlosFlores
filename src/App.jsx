import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import{ItemDetailContainer} from "./components/ItemDetailContainer"
import { NavBar } from "./components/NavBar";
import {Cart} from "./components/Cart"
import { CartProvider } from "./context/CartContext";



function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/ecommerce-CarlosFlores/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
