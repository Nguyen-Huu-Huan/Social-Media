const router = require("express").Router();
const messageController = require("../Controllers/messageController");

// SEND MESSAGE
router.post("/", messageController.sendMessage);


module.exports = router;