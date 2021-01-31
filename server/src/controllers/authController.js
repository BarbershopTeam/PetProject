const { authService: { createUser } } = require('../services');
const { passwordHelper: { hash } } = require('../helpers');

module.exports = {
    registerUser: async (req, res, next) => {
        try {
            const { body: { password } } = req;

            const hashedPassword = await hash(password);

            Object.assign(req.body, { password: hashedPassword });
            const newUser = await createUser(req.body);

            res.json(newUser);
        } catch (e) {
            next(e);
        }
    }
}