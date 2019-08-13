const express = require("express");
const shopController = require("../controllers/shop");

const router = express.Router();

//the main page(index route)
router.get("/", shopController.getIndex);

//get all products and display
router.get("/products", shopController.getProducts);

//cart router
router.get("/cart", shopController.getCart);

//show orders
router.get('orders',shopController.getOrders);

//checkout route
router.get("/checkout", shopController.getCheckout);

module.exports = router;
