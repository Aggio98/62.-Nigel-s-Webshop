import { NavLink } from "react-router-dom";
import "./style.css";
import { BsCart, BsPerson, BsHeart } from "react-icons/bs";

const NavBar = ({ user }) => {
  return (
    <div className="navbar-container">
      <div className="big-box">
        <h2>
          <span>The</span>
          <span style={{ color: "white" }}>Shop</span>
        </h2>
        <NavLink to="/" className="links">
          Home
        </NavLink>
        <form>
          <input type="text" />
          <button type="searchicon">Search</button>
        </form>
      </div>
      <div className="rightnav">
        <div>
          {user ? (
            <p>Welcome,{user.name}</p>
          ) : (
            <NavLink to="/login" className="icons">
              <BsPerson />
            </NavLink>
          )}
        </div>
        <NavLink to="/cart" className="icons">
          <BsCart />
        </NavLink>
        <NavLink to="/favorite" className="icons">
          <BsHeart />
        </NavLink>
      </div>
    </div>
  );
};

export { NavBar };
