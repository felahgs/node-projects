const path = require("path");

// dirname return the directory name of a path
// require.main.filename returns the root path of the application
module.exports = path.dirname(require.main.filename);
