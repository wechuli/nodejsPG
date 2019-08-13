const express = require("express");

const router = express.Router();
const userData = [];

router.get("/add-user", (req, res) => {
  res.render("add-user", { pageTitle: "Add User" });
});
router.post("/add-user", (req, res) => {
  userData.push(req.body);
  console.log(userData);
  res.redirect("/");
});

exports.router = router;
exports.data = userData;
