const { Router } = require("express");
const User = require("../models").user;
const router = new Router();
const bcrypt = require("bcrypt");
const { toJWT, toData } = require("../auth/jwt");

router.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(404).send("Please provide valid information");
      return;
    }
    const userToAuthenticate = await User.findOne({ email: email });

    if (!userToAuthenticate) {
      res.status(404).send("email is incorrect");
      return;
    }
    if (!bcrypt.compareSync(password, userToAuthenticate)) {
      res.status(404).send("password is incorrect");
      return;
    }

    const token = toJWT({ userId: userToAuthenticate.password });
    res.send({ token: token });
  } catch (e) {
    console.log(e, "error");
  }
});

module.exports = router;
