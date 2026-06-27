const process = require("node:process");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/DB.js");
const userRoute = require("./Routes/userRoute.js");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

(async () => {
  await connectDB();
})();

app.use("/api/users", userRoute);

app.get("/", (req, res) => res.send("welcome to my end"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));