import { NavBar } from "./components";
import { Routes, Route } from "react-router-dom";
import {
  HomePage,
  DetailsPage,
  LoginPage,
  FavoritePage,
  CartPage,
  SignUpPage,
} from "./pages";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [products, set_products] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:4000/products");
    //console.log("this is the data", res.data);
    set_products(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage products={products} />} />
        <Route path="/details/:id" element={<DetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
