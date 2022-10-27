import "./style.css";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="center">
      <h3>Login</h3>
      <form className="form">
        <div className="container">
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Login</button>
        </div>
      </form>
      <p>
        For better prices and better items{" "}
        <NavLink to="/signup">create</NavLink> an account
      </p>
    </div>
  );
};

export { LoginPage };
