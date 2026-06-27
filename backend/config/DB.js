const process = require("node:process");
const mongoose = require("mongoose");

const connectDB = async () => {
  const URI = process.env.MONGO_URL || process.env.MONGO_URI;

  if (!URI) {
    console.warn("MongoDB connection string is missing; continuing without database connection");
    return;
  }

  try {
    await mongoose.connect(URI);
    console.log(`MongoDB connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
  }
};

module.exports = connectDB;