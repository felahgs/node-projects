const express = require("express");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
// Express also has a bodyParser implmented on its core.
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(adminRoutes);
app.use(shopRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
