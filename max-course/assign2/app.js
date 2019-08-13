const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const mainRouter = require("./routes/main");
const userRouter = require("./routes/users");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));

app.use("/", mainRouter);
app.use("/users", userRouter);
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.listen(4000);
