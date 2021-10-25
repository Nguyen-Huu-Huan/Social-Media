const mongoose = require("mongoose");
const messageColorSettingSubSchema = new mongoose.Schema({
    roomID: {type: Number, default: 1},
    color: {type: String, default: "#fff000"},
})
const userSchema = new mongoose.Schema({
    email: {type: String, require: true, unique: true, dropDups: true},
    password: {type: String, require: true},
    loginAt: {type: Date, default: Date.now},
    new_user_status: {type: Boolean, default: true},
    message_color_setting: [messageColorSettingSubSchema],
    user: {type: String, default: "guest"}, 
    post: {type: Array, default: []},
    token: {type: String, default: null}
})
module.exports = mongoose.models['User Info'] || mongoose.model('User Info', userSchema);
