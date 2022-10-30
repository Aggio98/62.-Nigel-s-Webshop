const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const productRoute = require("./router/products");
const categorieRoute = require("./router/categories");
const signUpRoute = require("./router/signup");
const loginRoute = require("./router/login");

app.use(express.json());
app.use(cors());
app.use(productRoute);
app.use(categorieRoute);
app.use(signUpRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
