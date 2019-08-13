const express = require("express");
const router = express.Router();
const { ensureAuthenticated } = require("../helpers/auth");
router.get("/", (req, res) => {
  res.render("index/welcome");
});

router.get("/about", ensureAuthenticated, (req, res) => {
  res.render("index/about");
});

router.get("/dashboard", (req, res) => {
  res.render("index/dashboard");
});

module.exports = router;
