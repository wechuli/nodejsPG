function getRandBetweenValues(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function getInput() {
  return getRandBetweenValues(1, 50);
}

const ourInput = getInput();

//Calculate the weight of said object
//W = m*a // m/s^2

const EARTH_GRAVITY = 9.8;
function calculateWeight(mass) {
  return mass * EARTH_GRAVITY;
}
const calculatedWeight = calculateWeight(ourInput);

//3. Send them the data back
function sendData(object) {
  console.log("Sending object to scientists", object);
}

console.log(
  "SendData(),",
  sendData({ mass: ourInput, weight: calculatedWeight })
);
