const { authService: { createUser } } = require('../services');
const { passwordHelper: { hash } } = require('../helpers');
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
    }
}