const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    email: {type: String, require: true, unique: true, dropDups: true},
    password: {type: String, require: true},
    loginAt: {type: Date, default: Date.now},
    new_user_status: {type: Boolean, default: true},
    user: {type: String, default: "guest"}, 
    post: {type: Array, default: []}
})