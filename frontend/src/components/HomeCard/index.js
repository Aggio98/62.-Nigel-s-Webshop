import "./style.css";
import { NavLink } from "react-router-dom";

const HomeCard = (props) => {
  return (
    <div className="wrapper">
      <div>
        <h4>
          <NavLink to={`/details/${props.id}`} className="links">
            {props.title}
          </NavLink>
        </h4>
        <NavLink to={`/details/${props.id}`}>
          <img
            src={props.mainImage}
            alt={props.title}
            style={{ width: "25%" }}
          />
        </NavLink>
        <p>€{props.price}</p>
        <p>Rating: {props.rating}</p>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export { HomeCard };
