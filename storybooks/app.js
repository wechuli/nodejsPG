const express = require("express");
const path=require('path');
const exphbs = require("express-handlebars");
const mongoose = require("mongoose");
const cookiParser = require("cookie-parser");
const session = require("express-session");
const passport = require("passport");
//Load user model
require("./models/User");
//Passport config
require("./config/passport")(passport);
//Load Routes
const auth = require("./routes/auth");
const stories=require('./routes/stories');

//Load index
const index = require("./routes/index");

//Load Keys
const keys = require("./config/keys");
//Map promises
mongoose.Promise = global.Promise;
//Mongoose connect
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log("Mongo DB Connected"))
  .catch(err => console.log(err));

const app = express();

//Handlebars Middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set('view engine','handlebars');

const port = process.env.PORT || 5000;

app.use(cookiParser());
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);
//Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

//Set global vars
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  next();
});

//set static folder
app.use(express.static(path.join(__dirname,'public')));

//Use roues
app.use("/auth", auth);
app.use("/", index);
app.use('/stories',stories);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
