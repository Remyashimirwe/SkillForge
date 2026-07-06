const process = require("node:process");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/DB.js");
const userRoute = require("./Routes/userRoute.js");

dotenv.config();
const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use((req, res, next) => {
  console.log('REQUEST', req.method, req.originalUrl);
  next();
});
(async () => {
  await connectDB();
})();

app.use("/api/users", userRoute);

app.get("/", (req, res) => res.json("welcome to my end"));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));