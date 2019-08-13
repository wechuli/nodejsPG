const fs = require("fs");

fs.writeFileSync("notes.txt", "My name is Paul \n");

fs.appendFileSync("notes.txt", "This is supper fun \n");

for (let i = 0; i < 10; i++) {
  let randomNumber = Math.floor(Math.random() * 10);
  fs.appendFileSync("notes.txt", `${randomNumber}\n`);
}
