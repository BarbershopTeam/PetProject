const { authService: { createUser, createTokenPair } } = require('../services');
const { tokenizer, passwordHelper: { hash } } = require('../helpers');
const { OK } = require('../config/response-codes');

module.exports = {
    registerUser: async (req, res, next) => {
        try {
            const { body: { password } } = req;

            const hashedPassword = await hash(password);

            Object.assign(req.body, { password: hashedPassword });
            await createUser(req.body);

            res.status(OK).json();
        } catch (e) {
            next(e);
        }
    },

    loginUser: async (req, res, next) => {
        try {
            const { id } = req.user;

            const token_pair = tokenizer();

            await createTokenPair(id, token_pair);

            res.status(OK).json(req.user);

        } catch (e) {
            next(e)
        }
    }
    }