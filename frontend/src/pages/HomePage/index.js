import "./style.css";
import { HomeCard } from "../../components";
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = ({ products, addToCart, addToFavorite }) => {
  const [categories, set_categories] = useState([]);
  const [selectedCategories, set_selectedCategories] = useState([]);
  //console.log(products);
  const getCategories = async () => {
    const res = await axios.get("http://localhost:4000/categories");
    //console.log("this is the categories", res);
    set_categories(res.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const toggleCategories = (event) => {
    const newArray = selectedCategories.includes(event)
      ? selectedCategories.filter((cat) => cat !== event)
      : [...selectedCategories, event];
    set_selectedCategories(newArray);
  };

  const filterProductsByCategory =
    selectedCategories.length > 0
      ? products.filter((p) => selectedCategories.includes(p.categoryId))
      : products;
  //console.log(filterProductsByCategory);
  //console.log("clicked", addToCart);
  return (
    <div>
      <h1>Welcome to TheShop</h1>
      <h3>Our Exclusive Items</h3>
      <div style={{ display: "flex" }}>
        {categories.map((cat) => (
          <div key={cat.id}>
            <input
              onChange={(event) =>
                toggleCategories(parseInt(event.target.value))
              }
              value={cat.id}
              type="checkbox"
            />
            {cat.title}
          </div>
        ))}
      </div>
      <div>
        {!products
          ? "Loding..."
          : filterProductsByCategory.map((p) => (
              <div key={p.id}>
                <HomeCard
                  id={p.id}
                  title={p.title}
                  mainImage={p.mainImage}
                  price={p.price}
                  rating={p.rating}
                  description={p.description}
                  addToCart={addToCart}
                  addToFavorite={addToFavorite}
                />
                <button onClick={() => addToCart(p.id)}>Add To Cart</button>{" "}
                <button onClick={() => addToFavorite(p.id)}>
                  Add To Favorite
                </button>
              </div>
            ))}
      </div>
    </div>
  );
};

export { HomePage };
