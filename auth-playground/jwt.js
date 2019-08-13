const jwt = require("jsonwebtoken");

const myValidationFunction = async () => {
  const authToken = jwt.sign({ _id: "abc123" }, "thisismynewcourse", {
    expiresIn: "6 hours"
  });
  console.log(authToken);

  const verifyToken = jwt.verify(authToken, "thisismynewcourse");
  console.log(verifyToken);
};

myValidationFunction();
