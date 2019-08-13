const express = require("express");
const data = require("./add-user");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("allusers", { pageTitle: "All Users", userData: data.data });
});
router.get("/about", (req, res) => {
  res.render("about", { pageTitle: "About Us" });
});

module.exports = router;
