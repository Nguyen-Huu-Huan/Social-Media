const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    message_id: {type: Number, default: 2539},
    content: {type: String, require: true},
    sender: {type: String, default: "guess"},
    sendAt: {type: Date, default: Date.now},
})
module.exports = mongoose.models['Message'] || mongoose.model('Message', messageSchema);