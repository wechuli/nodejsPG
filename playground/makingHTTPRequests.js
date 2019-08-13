const https = require("https");

const url =
  "https://api.darksky.net/forecast/9c336c792c9723e1412dd029e44cde7d/-1.3l689,36.8442?units=si";

const request = https.request(url, response => {
  let data = "";
  response.on("data", chunk => {
    data = data + chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", error => {
  console.log(error);
});
request.end();
