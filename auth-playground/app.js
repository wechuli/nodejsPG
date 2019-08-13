const bcrypt = require("bcryptjs");

const plainTextPassword = "nairobi@1993";
let hashedPassword;

async function bcryptFunction() {
  hashedPassword = await bcrypt.hash(plainTextPassword, 8);
  console.log(hashedPassword);

  const isMatch = await bcrypt.compare("nairobi@1993", hashedPassword);
  console.log(isMatch);
}

bcryptFunction();
