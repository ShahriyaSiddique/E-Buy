const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const usersRoute = require("./routes/user");
// const bodyParser = require("body-parser");  // deprecated

// create express app
const app = express();

// initialize dotenv
env.config();

// initialize mongodb
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONOGODB_PASS}@nodetutorial.7rhjr.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log("Database Connected!!!");
  });

app.use(express.json());
// app.use(bodyParser()); // deprecated

app.use("/api", usersRoute);

app.listen(process.env.PORT, () => {
  console.log(`server is running at ${process.env.PORT}`);
});