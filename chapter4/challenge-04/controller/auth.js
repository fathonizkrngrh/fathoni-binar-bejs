const { user_game } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { JWT_SIGNATURE_KEY } = process.env;

module.exports = {
  register: async (req, res, next) => {
    try {
      const { username, email, password } = req.body;

      const existUser = await user_game.findOne({
        where: {
          email: email,
        },
      });

      if (existUser) {
        return res.status(409).json({
          status: false,
          message: "Email already used!!",
        });
      }

      // mengenkripsi password
      const encryptedPassword = await bcrypt.hash(password, 10);
      const user = await user_game.create({
        username,
        email,
        password: encryptedPassword,
      });

      return res.status(201).json({
        status: false,
        message: "success",
        data: {
          email: user.email,
          username: user.username,
        },
      });
    } catch (err) {
      next(err);
    }
  },

  login: async (req, res, next) => {
    try {
      // get request body
      const { email, password } = req.body;

      // cek email user
      const user = await user_game.findOne({ where: { email: email } });
      if (!user) {
        return res.status(409).json({
          status: false,
          message: "email or password doesn't match!!",
        });
      }
      // cek hash password
      const isCorrect = await bcrypt.compare(password, user.password);
      if (!isCorrect) {
        return res.status(400).json({
          status: false,
          message: "email or password doesn't match",
        });
      }

      //, generate token jwt
      payload = {
        id: user.id,
        name: user.username,
        email: user.email,
      };

      const token = jwt.sign(payload, JWT_SIGNATURE_KEY);

      return res.status(201).json({
        status: false,
        message: "success",
        data: {
          email: user.email,
          name: user.username,
          token: token,
        },
      });

      //return token
    } catch (err) {
      next(err);
    }
  },
  whoami: (req, res, next) => {
    const user = req.user;

    try {
      return res.status(200).json({
        status: false,
        message: "success",
        data: user,
      });
    } catch (error) {
      next(err);
    }
  },
  changePassword: async (req, res, next) => {
    try {
      const { oldPassword, newPassword, confirmNewPass } = req.body;

      if (newPassword !== confirmNewPass) {
        return res.status(422).json({
          status: false,
          message:
            "New password doesn't match, please confirm your new password!!",
        });
      }
      const user = await user_game.findOne({
        where: { id: req.user.id },
      });
      if (!user)
        return res
          .status(404)
          .json({ success: false, message: "User not found!" });

      const correct = await bcrypt.compare(oldPassword, user.password);
      if (!correct) {
        return res.status(400).json({
          status: false,
          message: "old password does not match!",
        });
      }

      const encryptedPassword = await bcrypt.hash(newPassword, 10);
      const updatedUser = await user.update(
        {
          password: encryptedPassword,
        },
        {
          where: {
            id: user.id,
          },
        }
      );

      return res.status(200).json({
        status: false,
        message: "success",
        data: updatedUser,
      });
    } catch (err) {
      next(err);
    }
  },
  deleteData: async (req, res, next) => {
    try {
      const deleted = await user_game.destroy({
        where: {
          id: req.user.id,
        },
      });

      return res.status(200).json({
        status: true,
        message: "success",
        data: deleted,
      });
    } catch (err) {
      next(err);
    }
  },
};
