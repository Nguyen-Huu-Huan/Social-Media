const mongoose = require("mongoose");
const courseDataSchema = new mongoose.Schema({
    subject_code: {type: String},
    subject_description: {type: String},
    campus: {type: String},
    timetable_group: [timetableGroupSchema]
})