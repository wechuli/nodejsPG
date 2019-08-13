//Import all necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const adminData = require("./routes/admin");

const shopRoutes = require("./routes/shop");
const path = require("path");

//instantiate the express application
const app = express();


app.set("view engine", "handlebars");
app.set("views", "views");

//handling the requests
app.use(bodyParser.urlencoded({ extended: false })); //parsing the body that is in the request
//app.use(express.static(path.join(__dirname, "public"))); //to enable files to be served statically
app.use(express.static("public"));
app.use(shopRoutes);
app.use("/admin", adminData.router);
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found" });
});

//let the server listen
app.listen(3000);
