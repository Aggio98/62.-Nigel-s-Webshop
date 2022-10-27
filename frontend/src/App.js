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

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
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
