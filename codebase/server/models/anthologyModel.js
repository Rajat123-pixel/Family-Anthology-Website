const mongoose = require("mongoose");

// importing model
const Member = require("./userModel.js");

const Schema = mongoose.Schema;

const anthologySchema = new Schema({
    memberId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: Member
    },
    story : {
        type: String,
        default: ""
    }
});

module.exports = mongoose.model('Story', anthologySchema);