const jwt = require("jsonwebtoken");
const { JWT_SECRET_KEY } = process.env;

module.exports = (roles = []) => {
  // roles param can be a single role string (e.g. Role.User or 'User')
  // or an array of roles (e.g. [Role.Admin, Role.User] or ['Admin', 'User'])
  if (typeof roles === "string") {
    roles = [roles];
  }

  return (req, res, next) => {
    const token = req.headers["authorization"];
    // console.log(token);
    // cek apakah token valid
    if (!token) {
      return res
        .status(401)
        .json({ status: false, message: "you're not authorized!" });
    }

    const payload = jwt.verify(token, JWT_SECRET_KEY);
    req.user = payload;

    // cek apakah ada roles nya dan apakah ada di dalam payoload
    if (roles.length > 0 && !roles.includes(payload.role)) {
      return res
        .status(401)
        .json({ status: false, message: "you're not authorized!" });
    }

    next();
  };
};
