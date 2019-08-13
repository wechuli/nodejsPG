const express = require("express");
const path = require("path");

const rootDir = require("../util/path");

const router = express.Router();

const products = [];

// admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // console.log("In the first middleware: ");
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct:true,
    formsCSS: true,
    productCSS: true
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

exports.router = router;
exports.products = products;
