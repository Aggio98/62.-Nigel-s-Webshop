import "./style.css";
import { HomeCard } from "../../components";

const HomePage = ({ products }) => {
  return (
    <div>
      <h1>Welcome to TheShop</h1>
      <h3>Our Exclusive Items</h3>
      <div>
        {!products
          ? "Loding..."
          : products.map((p) => (
              <div key={p.id}>
                <HomeCard
                  id={p.id}
                  title={p.title}
                  mainImage={p.mainImage}
                  price={p.price}
                  rating={p.rating}
                  description={p.description}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export { HomePage };
