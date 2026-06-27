const express = require("express");
const User = require("../modules/user");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

router.post("/", async (req, res) => {
  const { name, password } = req.body;
  const user = new User({ name, password });
  await user.save();
  res.json(user);
});

module.exports = router;