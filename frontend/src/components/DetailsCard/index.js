import "./style.css";

const DetailsCard = (props) => {
  return (
    <div>
      <div>
        <p className="content">
          Home | {props.category.title} | {props.title}
        </p>
        <h4>{props.title}</h4>
        <img src={props.mainImage} alt={props.title} style={{ width: "25%" }} />
        <p>€{props.price}</p>
        <p>Rating: {props.rating}</p>
        <p>Category: {props.category.title}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export { DetailsCard };
