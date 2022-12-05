const external = require("../external");
const db = external.postgres;

module.exports = {
  getChannel: async (req, res) => {
    db.connect();
    db.query("SELECT * FROM user_game", (err, data) => {
      console.log(err, data);
      db.end();

      return res.status(200).json(data.rows);
    });
  },
  userDetails: (req, res) => {
    const { id } = req.params;
    db.connect();
    db.query(`SELECT * FROM user_game WHERE id = ${id} `, (err, data) => {
      console.log(err, data);
      db.end();

      return res.status(200).json(data.rows)[0];
    });
  },
};
