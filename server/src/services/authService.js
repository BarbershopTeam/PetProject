const User = require('../database/models/User')

module.exports = {
    createUser: (newUser) => new User(newUser).save()
}