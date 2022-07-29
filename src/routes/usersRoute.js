const controller = require("../controller/usersController");
const express = require("express");
const router = express.Router();

router.post("/user/", controller.createUser);
router.get("/users/", controller.allUsers);
router.get("/users/:id", controller.userById);
router.post("/user/login/:id", controller.login);
router.delete("/user/config/:id", controller.deleteUser);

module.exports = router;
