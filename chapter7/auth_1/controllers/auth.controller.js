const { User } = require("../models");
const bcrypt = require("bcrypt");
// const roles = require("../utils/roles");

module.exports = {
  register: async (req, res, next) => {
    try {
      const { name, email, password } = req.body;

      const exist = await User.findOne({ where: { email } });
      if (exist) {
        return res.status(400).json({
          status: false,
          message: "user already exist!",
          data: null,
        });
      }

      const hashed = await bcrypt.hash(password, 10);
      const newUser = await User.create({
        name: name,
        email: email,
        password: hashed,
        // role: role,
      });

      res.status(201).json({
        status: true,
        message: "user registered",
        data: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
        },
      });
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      const user = await User.authenticate(req.body);
      const accesstoken = user.generateToken();

      res.status(200).json({
        status: true,
        message: "success login",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          // role: user.role,
          access_token: accesstoken,
        },
      });
    } catch (err) {
      next(err);
    }
  },

  whoami: async (req, res, next) => {
    try {
      const currentUser = req.user;

      return res.status(200).json({
        status: true,
        message: "user found!",
        data: {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          // role: currentUser.role,
        },
      });
    } catch (err) {
      next(err);
    }
  },
};
