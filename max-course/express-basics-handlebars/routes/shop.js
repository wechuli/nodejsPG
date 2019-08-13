const express = require("express");
const path = require("path");
const adminData = require("./admin");

const router = express.Router();

router.get("/", (req, res) => {
  const products = adminData.products;
  res.render("shop", {
    prods: products,
    pageTitle: "Shop",
    path: "/",
    activeShop:true,
    productCSS:true,
    hasProducts: products.length > 0
  });
});

module.exports = router;
