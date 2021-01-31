const User = require('../database/models/User')

module.exports = {
    findUserByEmail: (email) => User.findOne({email}),
    findUserByPhoneNumber: (phoneNumber) => User.findOne({phoneNumber})
}