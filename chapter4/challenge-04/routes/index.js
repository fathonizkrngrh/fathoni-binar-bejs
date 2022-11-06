const express = require("express");
const router = express.Router();
const c = require("../controller");
const mid = require("../helper/middleware");

// authorization
router.post("/auth/register", c.auth.register);
router.post("/auth/login", c.auth.login);
router.get("/auth/whoami", mid.mustlogin, c.auth.whoami);
router.post("/auth/change-password", mid.mustlogin, c.auth.changePassword);
router.delete("/auth/deleted", mid.mustlogin, c.auth.deleteData);

// user game biodata
router.post("/bio/addbio", c.user_game_biodata.addBio);
router.get("/bio/", c.user_game_biodata.showAll);
router.get("/bio/detail/:id", mid.mustlogin, c.user_game_biodata.detailBio);
router.post(
  "/bio/change-phonenumber",
  mid.mustlogin,
  c.user_game_biodata.updatePhoneNumber
);
router.delete("/bio/delete/:id", c.user_game_biodata.deleteBio);

// user game history
router.post("/history/addrecord", c.user_game_history.addRecord);
router.get("/history", c.user_game_history.showAll);
router.get("/history/rank", c.user_game_history.rankingRecord);
router.get(
  "/history/detail/:id",
  mid.mustlogin,
  c.user_game_history.detailRecord
);

module.exports = router;
