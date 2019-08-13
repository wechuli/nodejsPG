const fs = require("fs");

const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head>");
    res.write("<meta charset='utf-8'>");
    res.write("<title>Enter Message</title>");
    res.write("</head>");
    res.write(
      "<body><form action='/message' method='POST'><input name='message' type='text'><button type='submit'>Submit Me</button> </form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      console.log(chunk);
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      // fs.writeFileSync("message.txt", message); // blocking function for writing files
      fs.writeFile("message.txt", message, err => {
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Node js Page</title></head>");
  res.write("<body><p>Hello from my Node.js Server</p></body>");
  res.write("</html>");
  res.end();
};

//module.exports = requestHandler;

module.exports = {
  handler: requestHandler,
  someText: "This is some random text"
};

//or
// module.exports.handler = requestHandler;
// module.exports.someText = "This is some random text";

//or
// exports.handler = requestHandler;
// exports.someText = "This is some random text";

