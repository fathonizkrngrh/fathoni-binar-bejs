const express = require("express");
const router = express.Router();
const channel = require("./channel");

router.use("/channels", channel);

module.exports = router;
