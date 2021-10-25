const mongoose = require("mongoose");
const timetableGroupSchema = new mongoose.Schema({
    group: {type: String},
    activity: {type: String},
    time: {type: String},
    duration: {type: String}
})
const courseDataSchema = new mongoose.Schema({
    subject_code: {type: String},
    subject_description: {type: String},
    campus: {type: String},
    timetable_group: [timetableGroupSchema]
})
module.exports = mongoose.models['Course Data'] || mongoose.model('Course Data', courseDataSchema);