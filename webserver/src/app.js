const path = require("path");
const express = require("express");
const hbs = require("hbs");
const morgan = require("morgan");
const { geoCode } = require("./controllers/geoCodeController");
const { forecast } = require("./controllers/foreCastController");

const app = express();
app.use(morgan("dev"));

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars engine and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//Setup static directory to server
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", { title: "Weather App", name: "Wechuli" });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help",
    help: "Please help",
    name: "Paul Wechuli"
  });
});

app.get("/weather", (req, res) => {
  const { address } = req.query;
  if (!address) {
    return res.send({ error: "Address must be provided" });
  }

  geoCode(address, (err, geoData) => {
    if (err) {
      return res.send({ error: err, message: "Error fetching location" });
    }

    const { latitude, longitude } = geoData;

    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return res.send({ error: err });
      }
     
      res.send({
        latitude,
        longitude,
        location: geoData.location,
        forecast: forecastData
      });
    });
  });
});

app.get("/products", (req, res) => {
  const { search, rating } = req.query;

  if (!search) {
    return res.send({
      error: "You must provide a search term"
    });
  }
  res.send({ products: [], query: req.query });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Wechuli Paul",
    error: "No help text message found"
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    title: "404",
    name: "Wechuli Paul",
    error: "Generic 404 Error"
  });
});
const PORT = process.env.PORT || 8025;

app.listen(PORT, () => {
  console.info(`Server running on port ${PORT}`);
});
