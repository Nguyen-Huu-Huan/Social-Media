const router = require("express").Router();
const roomChatController = require("../Controllers/roomChatController");

//CREATE ROOM CHAT
router.post("/createRoom", roomChatController.createRoom);

// DELETE ROOM CHAT
router.post("/deleteRoom/:roomID", roomChatController.deleteRoom);

// CHANGE ROOM BACKGROUND COLOR
router.post("/changeColor/:roomID/:colorCode", roomChatController.changeColor);

//GET ROOM MESSAGES
router.get("/:roomId", roomChatController.getMessage);


module.exports = router;