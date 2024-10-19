const express = require("express");

const shopController = require("../controllers/shop");

const router = express.Router();

router.get("/", shopController.getIndexPage);

router.get("/products", shopController.getProductsPage);

router.get("/products/:productId", shopController.getProductPage);

router.get("/checkout", shopController.getCheckoutPage);

router.get("/cart", shopController.getCartPage);
router.post("/cart", shopController.postCart);

router.get("/orders", shopController.getOrdersPage);

module.exports = router;
