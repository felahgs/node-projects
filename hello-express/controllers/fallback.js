exports.getNotFound = (req, res, next) => {
  res.status(404).render("not-found", { path: "", pageTitle: "Not found" });
  // res.status(404).sendFile(path.join(__dirname, "views", "not-found.html"));
};
