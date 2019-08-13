const multer = require("multer");
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 1088;

const upload = multer({
  dest: "images"
});

app.post("/upload", upload.single("upload"), (req, res) => {
  res.send();
});
app.listen(PORT, () => {
  console.info(`Server listening on port ${PORT}`);
});
