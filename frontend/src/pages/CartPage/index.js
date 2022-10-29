import { HomeCard } from "../../components";

const CartPage = ({ addItem }) => {
  const cartItem = addItem.filter((products) => {
    if (products.id === true) {
      return true;
    } else {
      return false;
    }
  });
  //console.log(cartItem);
  return (
    <div>
      <h3>Your Cart</h3>
      {!cartItem
        ? "No product chosen, go back to shop"
        : cartItem.map((product) => {
            return (
              <HomeCard
                id={product.id}
                key={product.id}
                title={product.title}
                price={product.price}
                img={product.mainImage}
                description={product.description}
              />
            );
          })}
    </div>
  );
};

export { CartPage };
