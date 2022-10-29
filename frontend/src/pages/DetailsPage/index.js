import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { DetailsCard } from "../../components";

const DetailsPage = ({ products, addToCart, addToFavorite }) => {
  const params = useParams();
  //console.log("this is params", params);
  const [details, set_details] = useState(null);

  const getDetails = async () => {
    try {
      const res = await axios.get(
        `http://localhost:4000/products/${params.id}`
      );
      console.log("this is the data for details", res.data);
      set_details(res.data);
    } catch (e) {
      console.log("the error message", e.message);
    }
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <div>
      {!details ? (
        "Loading..."
      ) : (
        <div key={details.id}>
          <DetailsCard
            id={details.id}
            title={details.title}
            mainImage={details.mainImage}
            price={details.price}
            rating={details.rating}
            description={details.description}
            category={details.categorie}
          />
          <button onClick={() => addToCart(products)}>Add To Cart</button>{" "}
          <button onClick={() => addToFavorite(products)}>
            Add To Favorite
          </button>
        </div>
      )}
    </div>
  );
};

export { DetailsPage };
