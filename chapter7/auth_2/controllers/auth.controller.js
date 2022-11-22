const { User } = require("../models");
const bcrypt = require("bcrypt");
const roles = require("../utils/roles");
const passport = require("../utils/passport");

module.exports = {
  homePage: (req, res) => {
    res.render("home");
  },
  registerPage: (req, res) => {
    res.render("register");
  },

  register: async (req, res, next) => {
    try {
      const { name, email, password, role = roles.user } = req.body;

      const exist = await User.findOne({ where: { email } });
      if (exist) {
        return res.render("register");
      }

      const hashed = await bcrypt.hash(password, 10);
      await User.create({
        name: name,
        email: email,
        password: hashed,
        role: role,
      });

      res.redirect("/auth/login");
    } catch (err) {
      next(err);
    }
  },

  loginPage: (req, res) => {
    res.render("login");
  },

  login: passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/auth/login",
    failureFlash: true,
  }),

  whoami: (req, res) => {
    res.render("whoami", { user: req.user });
  },
};
// login: async (req, res, next) => {
//   try {
//     const user = await User.authenticate(req.body);
//     const accesstoken = user.generateToken();
//     res.status(200).json({
//       status: true,
//       message: "success login",
//       data: {
//         id: user.id,
//         name: user.name,
//         email: user.email,
//         role: user.role,
//         access_token: accesstoken,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// },
// whoami: async (req, res, next) => {
//   try {
//     const currentUser = req.user;
//     return res.status(200).json({
//       status: true,
//       message: "user found!",
//       data: {
//         id: currentUser.id,
//         name: currentUser.name,
//         email: currentUser.email,
//         role: currentUser.role,
//       },
//     });
//   } catch (err) {
//     next(err);
//   }
// },
