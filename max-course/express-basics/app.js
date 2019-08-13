//Import all necessary modules
const express = require("express");
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const errorController = require("./controllers/error");

const shopRoutes = require("./routes/shop");
//const path = require("path");

//instantiate the express application
const app = express();

//setting both the view engine and the view folder
app.set("view engine", "ejs");
app.set("views", "views");

//handling the requests
app.use(bodyParser.urlencoded({ extended: false })); //parsing the body that is in the request

//app.use(express.static(path.join(__dirname, "public"))); //to enable files to be served statically
app.use(express.static("public"));

//direct all '/' routes to the shopRoutes controller
app.use(shopRoutes);

//direct all '/admin' routes to the adminRoutes controller
app.use("/admin", adminRoutes);

//direct any route not handled(not found) to the error 404 page handler
app.use(errorController.get404);

//let the server listen
app.listen(3000);
