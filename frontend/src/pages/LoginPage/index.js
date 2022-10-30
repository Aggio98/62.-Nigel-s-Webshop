import "./style.css";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const LoginPage = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputEmailEvent = (event) => {
    setEmail(event.target.value);
  };

  const inputPasswordEvent = (event) => {
    setPassword(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const User = {
        email: email,
        password: password,
      };
      const res = await axios.post("http://localhost:4000/login", User);
      setUser(res.data);
      console.log("token", res.data.token);
    } catch (e) {
      console.log(e, "error");
    }
  };
  return (
    <div className="center">
      <h3>Login</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={inputEmailEvent}
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={inputPasswordEvent}
          />
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
