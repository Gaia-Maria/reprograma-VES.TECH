const controller = require("../controller/usersController");
const express = require("express");
const router = express.Router();

router.post("/user", controller.createUser);
router.get("/users/", controller.allUsers);
router.post("/user/:id", controller.login);
router.delete("/user/:id", controller.deleteUser);

module.exports = router;
