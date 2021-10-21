const mongoose = require("mongoose");

const timetableGroupSchema = new mongoose.Schema({
    group: {type: String},
    activity: {type: String},
    time: {type: String},
    duration: {type: String}
})