const { Router } = require("express");
const Product = require("../models").product;
const Category = require("../models").categorie;

const router = new Router();

router.get("/products", async (req, res, next) => {
  const allProducts = await Product.findAll({ include: [{ model: Category }] });
  res.send(allProducts);
});

router.get("/products/:id", async (req, res, next) => {
  const id = req.params.id;
  const getProduct = await Product.findByPk(id, {
    include: [{ model: Category, attributes: ["title"] }],
  });
  res.send(getProduct);
});

module.exports = router;
