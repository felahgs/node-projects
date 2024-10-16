const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const rootDir = require("./util/path");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const app = express();

// Set up Pug as the template engine
app.set("view engine", "pug");

app.use(bodyParser.urlencoded({ extended: true }));
// Express also has a bodyParser implmented on its core.
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));

// Define a base path for static pages routing "e.g /css/main.css" css directory is located in public
app.use(express.static(path.join(__dirname, "public")));
app.use("/admin", adminData.routes);
app.use("/", shopRoutes);

app.use((req, res, next) => {
  res.status(404).render("not-found", { pageTitle: "Not found" });
  // res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
