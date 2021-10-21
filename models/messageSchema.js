const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message_id: {type: Number},
    content: {type: String, require: true},
    sender: {type: String},
    sendAt: {type: Date, default: Date.now},
})