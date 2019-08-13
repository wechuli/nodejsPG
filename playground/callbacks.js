setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

// A callback is a function we provide as an argument to another function with intention of having it be called at some point in the future./
// Callbacks can be asynchronous but it does not necessarily follow that all callbacks are asynchronous

const names = ["Paul", "Wawira", "Jess"];
const shortNames = names.filter(name => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      lat: 0.8,
      lon: 9
    };
    callback(data);
  }, 2000);
};

geocode("Phili", data => {
  console.log(data);
});
