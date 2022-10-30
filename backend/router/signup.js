const { Router } = require("express");
const User = require("../models").user;
const router = new Router();
const bcrypt = require("bcrypt");

router.post("/signup", async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password, "this is the data for sign up");
    if ((!name, !email, !password)) {
      res.status(404).send("missing parameters");
    } else {
      console.log("reached to the else statement in signup");
      const newUser = await User.create({
        name,
        email,
        password: bcrypt.hashSync(password, 10),
      });
      res.json(newUser);
    }
  } catch (e) {
    next("error", e);
  }
});

module.exports = router;
