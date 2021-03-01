const { Router } = require('express');
const { authController } = require('../controllers');
const { authMiddleware: { registrationValidator, checkEmailAvailability, checkPhoneNumberAvailability, checkEmailForReact, checkCredentials } } = require('../middlewares')

const authRouter = Router();

authRouter.post('/signup', registrationValidator, checkEmailAvailability, checkPhoneNumberAvailability, authController.registerUser);
authRouter.post('/login', checkCredentials, authController.loginUser);
authRouter.post('/email', checkEmailForReact);

module.exports = authRouter;