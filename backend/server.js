const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 4000;
const productRoute = require("./router/products");
const categorieRoute = require("./router/categories");

app.use(express.json());
app.use(cors());
app.use(productRoute);
app.use(categorieRoute);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});
