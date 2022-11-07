const user = require("./user");

module.exports = {
  // internal error handler
  exceptions: (err, req, res, next) => {
    res.render("server-error", { error: err.message });
  },
  // 404 error handler
  notFound: (req, res, next) => {
    res.render("not-found");
  },
  user,
};
