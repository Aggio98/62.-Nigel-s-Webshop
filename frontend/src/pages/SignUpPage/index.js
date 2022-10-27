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
    </div>
  );
};

export { SignUpPage };
