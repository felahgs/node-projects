const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST">
        <input type="text" name="title">
        <button type="submit">Add Product</button>
      </form>`
  );
  // console.log("add product page");
  // console.log("from:", req.originalUrl, "\n");
});

router.post("/product", (req, res, next) => {
  // console.log("product page");
  // console.log("from:", req.originalUrl, "\n");

  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
