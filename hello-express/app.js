const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Express has an bodyParser implmented on its core also.
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

app.use("/", (req, res, next) => {
  // console.log("This will always run because it will match the path.");
  // console.log("from:", req.originalUrl, "\n");
  // If you try to use res.send here, there will be an error on the next app use
  // because express will try to send both commands in the same path.
  next();
});

app.use("/add-product", (req, res, next) => {
  res.send(
    `<form action="/product" method="POST">
      <input type="text" name="title">
      <button type="submit">Add Product</button>
    </form>`
  );
  // console.log("add product page");
  // console.log("from:", req.originalUrl, "\n");
});

app.use("/product", (req, res, next) => {
  // console.log("product page");
  // console.log("from:", req.originalUrl, "\n");

  console.log(req.body);
  res.redirect("/");
});

app.use("/", (req, res, next) => {
  // console.log("Landing page");
  // console.log("from:", req.originalUrl, "\n");
  res.send("<h1>Hello from Express!</h1>");
});

app.listen(3000, () => {
  // console.log("Server is running on port 3000");
});
