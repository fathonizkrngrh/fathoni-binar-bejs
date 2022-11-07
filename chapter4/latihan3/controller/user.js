const data = require("../data.json");
const fs = require("fs");

module.exports = {
  getAll: (req, res) => {
    const users = data.user_game;

    return res.status(200).json({
      status: "success",
      message: "success get all data",
      data: users,
    });
  },
  show: (req, res) => {
    const { userId } = req.params;

    const user = data.user_game.filter((el) => el.id == userId); //get id dari data.json

    //cek apa endpoint kosong atau tidak
    if (user.length == 0) {
      return res.status(404).json({
        status: "failed",
        message: "not found",
        data: null,
      });
    }

    return res.status(200).json({
      status: "success",
      message: "success get user data",
      data: user,
    });
  },
  create: (req, res) => {
    const { username, email } = req.body;

    let users = data.user_game;

    const user = {
      id: users[users.length - 1].id + 1, //ambil id yang terakhir lalu ditambah 1
      username,
      email,
    };

    users.push(user);

    fs.writeFileSync("./data.json", JSON.stringify(data));

    return res.status(201).json({
      status: "success",
      message: "success create user data!",
      data: user,
    });
  },
  update: (req, res) => {
    const { username, email } = req.body;
    const { userId } = req.params;

    const foundIndex = data.user_game.findIndex((el) => el.id == userId);

    if (foundIndex < 0) {
      return res.status(404).json({
        status: "failed",
        message: "data not found",
        data: null,
      });
    }

    if (username) {
      data.user_game[foundIndex].username = username;
    }

    if (email) {
      data.user_game[foundIndex].email = email;
    }

    fs.writeFileSync("./data.json", JSON.stringify(data));

    return res.status(201).json({
      status: "success",
      message: "success update user data!",
      data: data.user_game[foundIndex],
    });
  },
  delete: (req, res) => {
    const { userId } = req.params;

    const user = data.user_game.findIndex((el) => el.id == userId);

    if (user.length == 0) {
      return res.status(404).json({
        status: "failed",
        message: "data not found",
        data: null,
      });
    }

    const keep = data.user_game.filter((el) => el.id != userId);
    data.user_game = keep;
    fs.writeFileSync("./data.json", JSON.stringify(data));

    return res.status(201).json({
      status: "success",
      message: "success delete user data!",
      data: data.user_game,
    });
  },
};
