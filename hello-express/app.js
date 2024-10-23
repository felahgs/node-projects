const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const rootDir = require("./util/path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const fallbackController = require("./controllers/fallback");
const db = require("./util/database");

const app = express();

// Set up Pug as the template engine
app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
// Express also has a bodyParser implmented on its core.
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Define a base path for static pages routing "e.g /css/main.css" css directory is located in public
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminRoutes);
app.use("/", shopRoutes);

app.use(fallbackController.getNotFound);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
