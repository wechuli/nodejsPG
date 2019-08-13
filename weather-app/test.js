const { geoCode } = require("./controllers/geoCodeController");
const { forecast } = require("./controllers/foreCastController");

geoCode("Nairobi", (err, data) => {
  if (data) {
    console.log(data);
  }
});

forecast("-1.36l86", 36.8566, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
