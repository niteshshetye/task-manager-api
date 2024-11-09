const express = require("express");
const { connectDb } = require("./db/connect");
const tasksRouter = require("./routes/tasks");
const { notFound } = require("./middleware/not-found");
const { errorHandler } = require("./middleware/error-handler");
require("dotenv").config();

// create express app
const app = express();

// middelware
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
app.use(errorHandler); // all unhandler error come here

const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URL);
    app.listen(3000, () => {
      console.log(`Server is running on port: ${3000}`);
    });
  } catch (error) {
    console.log("something went wrong");
  }
};

startServer();
