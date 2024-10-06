const express = require("express");
const path = require("path");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});
//   res.send(
//     `<form action="/add-product" method="POST">
//         <input type="text" name="title">
//         <button type="submit">Add Product</button>
//       </form>`
//   );
// console.log("add product page");
// console.log("from:", req.originalUrl, "\n");
// });

router.post("/add-product", (req, res, next) => {
  // console.log("product page");
  // console.log("from:", req.originalUrl, "\n");

  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
