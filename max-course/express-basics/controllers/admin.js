const Product = require("../models/product");

//Add a new product, save and redirect back to th index page
exports.postAddProduct = (req, res) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const price = req.body.price;
  const description = req.body.description;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect("/");
};

// get the form to enable adding of products through our model
exports.getAddProduct = (req, res, next) => {
  // console.log("In the first middleware: ");
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAddProduct: true,
    formsCSS: true,
    productCSS: true
  });
};

//Get the admin view of all the products of in the shop
exports.adminProductList = (req, res) => {
  Product.fetchAll(products => {
    res.render("admin/adminproduct-list", {
      prods: products,
      pageTitle: "Admin Product",
      path: "/admin/adminproduct-list"
    });
  });
};
