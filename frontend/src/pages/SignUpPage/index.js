import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const inputEmailEvent = (event) => {
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  const inputNameEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  const inputPasswordEvent = (event) => {
    console.log(event.target.value);
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const User = {
        name: name,
        email: email,
        password: password,
      };
      const res = await axios.post("http://localhost:4000/signup", User);
      console.log(res, "this is the account");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="center">
      <h3>Create Your Account</h3>
      <form className="form" onSubmit={handleSubmit}>
        <div className="container">
          <label>Name</label>
          <input
            type="name"
            value={name}
            placeholder="Enter Name"
            onChange={inputNameEvent}
          />
          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Enter Email"
            onChange={inputEmailEvent}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter Password"
            onChange={inputPasswordEvent}
          />
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
