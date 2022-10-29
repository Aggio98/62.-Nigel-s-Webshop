import { NavLink } from "react-router-dom";

const SignUpPage = () => {
  return (
    <div className="center">
      <h3>Create Your Account</h3>
      <form className="form">
        <div className="container">
          <label>Name</label>
          <input type="name" placeholder="Enter Name" />
          <label>Email</label>
          <input type="email" placeholder="Enter Email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" />
          <button type="submit">Sign Up</button>
        </div>
      </form>
      <p>
        Already have an account, <NavLink to="/login">Login</NavLink>{" "}
      </p>
    </div>
  );
};

export { SignUpPage };
