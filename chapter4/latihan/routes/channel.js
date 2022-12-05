const express = require("express");
const router = express.Router();
const controller = require("../controller");

router.get("/", controller.channel.getChannel);
router.get("/:id", controller.channel.userDetails);

module.exports = router;
