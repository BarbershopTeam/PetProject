const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    email:  {
        type: String,
        required: true
    },
    bookings: {
        type: Array,
    }
});

module.exports = model('user', UserSchema);