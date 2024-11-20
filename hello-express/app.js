const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// const adminRoutes = require("./routes/admin");
// const shopRoutes = require("./routes/shop");

const fallbackController = require("./controllers/fallback");
const mongoConnect = require("./util/database");

const app = express();

// Set up Pug as the template engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {
  // User.findByPk(1)
  //   .then((user) => {
  //     req.user = user;
  //     next();
  //   })
  //   .catch((err) => console.log(err));
});

// app.use("/admin", adminRoutes);
// app.use("/", shopRoutes);

app.use(fallbackController.getNotFound);

mongoConnect((client) => {
  console.log("mongo client", client);
  app.listen(3000);
});
