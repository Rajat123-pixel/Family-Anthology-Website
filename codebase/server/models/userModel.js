const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
    memberName: {
        type: String, 
        required: true,
    },
    contactNumber: {
        type: Number,
        required: true
    },
    birthdate: {
        type: Number,
        required: true
    }, 
    birthMonth: {
        type: Number,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Member', usersSchema);