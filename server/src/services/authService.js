const User = require('../database/models/User')

module.exports = {
    createUser: (newUser) => new User(newUser).save(),
    createTokenPair: (id, token_pair) => User.findByIdAndUpdate({id}, {tokens: token_pair}),
}