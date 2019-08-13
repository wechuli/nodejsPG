const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("I will be executed regardless");
  next();
});

app.use("/users", (req, res, next) => {
  console.log("Users middleware");
  res.send("Congrats, you have reached the users page");
});

// app.use("/", (req, res, next) => {
//   console.log("Home page middleware");
//   res.send("This is the index page");
// });

app.listen(3000);
