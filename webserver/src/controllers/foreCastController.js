const request = require("request");

module.exports = {
  forecast(lat, lon, callback) {
    const url = `https://api.darksky.net/forecast/9c336c792c9723e1412dd029e44cde7d/${lat},${lon}?units=si`;

    request({ url, json: true }, (err, response) => {
      if (err) {
        callback(
          `An error occurred while making the request to dark sky:Error Code: ${
            err.code
          }`,
          undefined
        );
      }

      if (response.body.error) {
        callback("Unable to find location", undefined);
      } else {
        let temperature = response.body.currently.temperature;
        let precProb = response.body.currently.precipProbability;

        let summary = response.body.daily.data[0].summary;

        callback(undefined, { temperature, precProb, summary });
      }
    });
  }
};
