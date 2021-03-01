const { Schema, model } = require('mongoose');

const tokenSchema = {
    access_token: {
        type: String,
        required: true
    },
    refresh_token: {
        type: String,
        required: true
    }
};


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
    },
    tokens: [tokenSchema]
});

module.exports = model('user', UserSchema);