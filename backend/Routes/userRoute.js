const express = require("express");
const router = express.Router();
const User = require("../models/user");
const { register, login } = require("../controller/authcontroller");

router.get("/register", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/register", register);
router.post("/login", login);

module.exports = router;
