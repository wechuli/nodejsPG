console.log("Client side JS file is loaded");
const form = document.querySelector(".form");
const inputValue = document.querySelector("#location_address");
const resultDiv = document.querySelector(".result");
const submitBtn = document.querySelector("button");

// form.addEventListener("submit", fetchWeather);

submitBtn.addEventListener("click", fetchWeather);

function fetchWeather(e) {
  e.preventDefault();
  let address = inputValue.value;
  console.log(address);
  fetch(`http://localhost:5070/weather?address=${address}`, {
      method: "get"
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      //create elements


      let latitude = document.createElement("p");
      latitude.textContent = data.latitude;

      let longitude = document.createElement("p");
      longitude.textContent = data.longitude;

      let location = document.createElement("p");
      location.textContent = data.location;

      let forecast = document.querySelector("p");
      forecast.textContent = data.forecast.summary;

      resultDiv.appendChild(latitude);
      resultDiv.appendChild(longitude);
      resultDiv.appendChild(location);
      resultDiv.appendChild(forecast);


    })
    .catch(err => console.log(err));
}