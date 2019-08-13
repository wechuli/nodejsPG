const fs = require("fs");

const data = fs.readFileSync("2-json.json").toString();
const parsedData = JSON.parse(data);
parsedData.name = "Paul";
parsedData.age = 26;

console.log(parsedData);

fs.writeFileSync("2-json.json", JSON.stringify(parsedData));
