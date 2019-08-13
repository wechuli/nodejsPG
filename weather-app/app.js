const { geoCode } = require("./controllers/geoCodeController");
const { forecast } = require("./controllers/foreCastController");

let location = process.argv[2];

if (!location) {
  console.log("Please provide the address");
} else {
  geoCode(location, (err, geoData) => {
    if (err) {
      return console.log(err);
    }

    const { latitude, longitude } = geoData;

    forecast(latitude, longitude, (err, forecastData) => {
      if (err) {
        return console.log(err);
      }
      console.log(geoData.location);
      console.log(forecastData);
    });
  });
}
