const express = require("express");
const router = express.Router();
const User = express('../models/user');
router.post("/", async (req, res) => {

  try {
    const { username, email, password } = req.body;
    //if (!username || !email || !password) {
      //return res.status(400).json({ msg: "All fields are required" });
    //}
    // Save to DB (example with Mongoose)
    const newUser = new User({ username, email, password });
    await newUser.save();

    res.status(201).json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ msg: "Server error" });
  }
  router.get("/", async (req, res) => {
  try {
  //  const users = await User.find().select("-password");
    res.json(User);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

});

module.exports = router;
