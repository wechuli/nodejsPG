const fs = require("fs");
// const book = {
//   title: "Pride and Prejudice",
//   author: "Jane Austen"
// };

// const bookJSON = JSON.stringify(book);
// console.log(bookJSON);

// fs.writeFileSync("1-json.json", bookJSON);

// const parsedData = JSON.parse(bookJSON);
// console.log(parsedData.title);

const dataBuffer = fs.readFileSync("1-json.json");
const dataJson = dataBuffer.toString();
const data = JSON.parse(dataJson);
console.log(data.title);
