const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndexPage);

router.get("/products", shopController.getProductsPage);

router.get("/checkout", shopController.getCheckoutPage);

router.get("/cart", shopController.getCartPage);
// router.get("/products", productsController.getProducts);
// router.get("/checkout", checkoutController.getCheckoutPage);

module.exports = router;
