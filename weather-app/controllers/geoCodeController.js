const request = require("request");

module.exports = {
  geoCode(address, callback) {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoid2VjaHVsaSIsImEiOiJjanhsa2hiczMwMnd3M3RzMmJqMGtid3V1In0.OF1Os_upwt06-GzheoOr6Q`;

    request({ url, json: true }, (err, response) => {
      if (err) {
        callback("Unable to connect to location services", undefined);
      }

      if (response.body.features.length === 0) {
        callback("Unable to find location, try another search", undefined);
      } else {
        let latitude = response.body.features[0].center[1];
        let longitude = response.body.features[0].center[0];
        let location = response.body.features[0].place_name;

        callback(undefined, { latitude, longitude, location });
      }
    });
  }
};
