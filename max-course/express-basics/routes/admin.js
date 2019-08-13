const express = require("express");

const shopController = require("../controllers/shop");
const adminController = require('../controllers/admin')

const router = express.Router();

// admin/add-product => GET
router.get("/add-product", adminController.getAddProduct);

// /admin/add-product => POST
router.post("/add-product", adminController.postAddProduct);

// /admin/adminproduct-list
router.get("/adminproduct-list", adminController.adminProductList);

module.exports = router;
