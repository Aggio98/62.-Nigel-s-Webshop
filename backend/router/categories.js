const { Router } = require("express");
const Category = require("../models").categorie;

const router = new Router();

router.get("/categories", async (req, res, next) => {
  const getCategories = await Category.findAll();
  res.send(getCategories);
});

module.exports = router;
