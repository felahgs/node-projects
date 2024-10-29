const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const fallbackController = require("./controllers/fallback");
const sequelize = require("./util/database");

const app = express();

// Set up Pug as the template engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use(fallbackController.getNotFound);

// Check all the defined modules and create tables on the database it they don't exist.
sequelize
  .sync()
  .then((result) => {
    // console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
