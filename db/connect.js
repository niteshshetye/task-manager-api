const mongoose = require("mongoose");

const connectDb = async (url) => {
  try {
    await mongoose.connect(url);
    console.log("Database connected");
  } catch (error) {
    console.log("Error occured while connecting to db");
    throw new Error(error);
  }
};

module.exports = { connectDb };
