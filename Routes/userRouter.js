const router = require("express").Router();
const authentication = require("../Middleware/authentication");
const userController = require("../Controllers/userController");


//REGISTER
router.post("/register", userController.register);

//LOGIN
router.post("/login", userController.login);

module.exports = router;