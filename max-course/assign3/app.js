const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const ejs = require("ejs");
const addRoutes = require("./routes/add-user");
const userRoutes = require("./routes/users");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("public"));
app.use("/", userRoutes);
app.use("/admin", addRoutes.router);

app.use((req, res) => {
  res.status(404).render("404", { pageTitle: "Resource Unaivalable" });
});

app.listen(3000);
