const express = require("express");
const router = express.Router();
const controller = require("../controller");

router.get("/", controller.user.getAll);
router.get("/:userId", controller.user.show);
router.post("/", controller.user.create);
router.put("/:userId", controller.user.update);
router.delete("/:userId", controller.user.delete);

module.exports = router;
