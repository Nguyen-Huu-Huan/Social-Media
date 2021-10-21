const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    post_id: {type: Number},
    post_content: {type: String},
    course_code: {type: Number},
    course_date_and_time: {type: String},
    course_instructor: {type: String},
    current_teammate: {type: Array},
    post_owner: {type: String},
    post_date_time: {type: String},
    post_type: {type: String}
})