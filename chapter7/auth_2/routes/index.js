const express = require("express");
const router = express.Router();
const auth = require("../controllers/auth.controller");
const restrict = require("../middlewares/restrict");

router.get("/", auth.homePage);

// register
router.get("/auth/register", auth.registerPage);
router.post("/auth/register", auth.register);

// login
router.get("/auth/login", auth.loginPage);
router.post("/auth/login", auth.login);

//whoami
router.get("/auth/whoami", restrict, auth.whoami);

// router.post("/auth/register", auth.register);
// router.post("/auth/login", auth.login);
// router.get("/auth/whoami", restrict, auth.whoami);

// // login
// router.get("/login", authorize(), (req, res) => {
//   return res.send("login");
// });

// // login, role = user
// router.get("/login-user", authorize(roles.user), (req, res, next) => {
//   return res.send("login-user");
// });

// // login, role = admin
// router.get("/login-admin", authorize(roles.admin), (req, res, next) => {
//   return res.send("login-admin");
// });

// // login, role = superadmin
// router.get(
//   "/login-superadmin",
//   authorize(roles.superadmin),
//   (req, res, next) => {
//     return res.send("login-superadmin");
//   }
// );

// // login, role = admin, superadmin
// router.get(
//   "/login-admin-superadmin",
//   authorize([roles.admin, roles.superadmin]),
//   (req, res, next) => {
//     return res.send("login-admin-superadmin");
//   }
// );

module.exports = router;
