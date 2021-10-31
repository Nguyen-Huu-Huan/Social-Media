const router = require("express").Router();
const chatRoomModel = require("../models/chatRoomSchema");

roomChatController = {
    createRoom: async (req, res) => {
        try {
            const {roomName, roomDescription, roomMember} = req.body;
            const new_room = new mongoose.Schema({
                people: roomMember,
                room_name: roomName
                // room_description: roomDescription
            })
            const create_new_room = await new_room.save();
            res.status(200).json(create_new_room);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteRoom: async (req,res) => {
        try {
            roomID = req.params.roomID;
            let delete_room = await chatRoomModel.findByIdAndDelete(roomID);
            !delete_room && res.status(400).json("Unable to delete room");
    
            res.json({ message: `Room ${roomID} has been deleted.` });
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    changeColor: async (req, res) => {
        try {
            const {roomID, colorCode} = req.params;
            const room_background_setting = await chatRoomModel.findByIdAndUpdate(roomID, {background_setting: colorCode});
            !room_background_setting && res.status(404).json("Cannot change the room's color setting");
            
            res.status(200).json(room_background_setting);
        } catch (error){
            return res.status(500).json(error);
        }
    },
    getMessage: async (req, res) => {
        try {
            let room_info = await chatRoomModel.findOne({_id: mongoose.Types.ObjectId(req.params.roomID)});
            !room_info && res.status(404).json("No room found!"); 
        
            let load_message = room_info['message_list'];
            res.status(200).json(load_message);
          } catch (error) {
            res.status(500).json(error);
        }
    }
}
module.exports = roomChatController;