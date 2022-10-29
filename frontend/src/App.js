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
  const [cart, set_cart] = useState([]);
  //const [favorite, set_favorite] = useState([]);

  const getProducts = async () => {
    const res = await axios.get("http://localhost:4000/products");
    //console.log("this is the data", res.data);
    set_products(res.data);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const addToCart = (products) => {
    const shoppingCart = cart.find((item) => item.id === products.id)
      ? cart.map((item) =>
          item.id === products.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      : [...cart, { ...products, quantity: 1 }];
    set_cart(shoppingCart);
    console.log("this is the", shoppingCart);
  };

  //add to favorite page

  // const addToFavorite = (products) => {
  //   const favoriteProducts = favorite.find((item) => item.id === products.id)
  //     ? favorite.map((item) =>
  //         item.id === products.id
  //           ? { ...item, quantity: item.favorite + 1 }
  //           : item
  //       )
  //     : [...favorite, { ...products, quantity: 1 }];
  //   set_favorite(favoriteProducts);
  // };

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={products}
              addToCart={addToCart}
              //addToFavorite={addToFavorite}
            />
          }
        />
        <Route
          path="/details/:id"
          element={
            <DetailsPage
              products={products}
              addToCart={addToCart}
              //addToFavorite={addToFavorite}
            />
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/favorite" element={<FavoritePage />} />
        <Route path="/cart" element={<CartPage addItem={products} />} />
        <Route path="/signup" element={<SignUpPage />} />
      </Routes>
    </div>
  );
}

export default App;
