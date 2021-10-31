const router = require("express").Router();
const messageModel = require("../models/Message");

const messageController = {
    sendMessage: async (req, res) => {
        const new_message = new messageModel(req.body);
        try {
          const send_new_message = await new_message.save();
          res.status(200).json(send_new_message);
        } catch (error) {
          res.status(500).json(error);
        }
    }
    // deleteMessage: async (req, res) => {

    // }
}
module.exports = messageController;