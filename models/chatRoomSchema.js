const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message_id: {type: Number, default: 2539},
    content: {type: String, require: true},
    sender: {type: String, default: "guess"},
    sendAt: {type: Date, default: Date.now},
})
const chatRoomSchema = new mongoose.Schema({
    room_id: {type: Number},
    people: {type: Array, default: []},
    background_setting: {type: Array, default: ['#000000', '#000000']},
    user_color_setting: {type: String, default: '#F8fbf8'},
    room_name: {type: String},
    message_list: [messageSchema]
})
module.exports = mongoose.models['Chat Room'] || mongoose.model('Chat Room', chatRoomSchema);
