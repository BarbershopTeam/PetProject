const { Router } = require('express');
const { authController } = require('../controllers');
const { authMiddleware: { registrationValidator, checkEmailAvailability, checkPhoneNumberAvailability, checkEmailForReact } } = require('../middlewares')

const authRouter = Router();

authRouter.post('/', registrationValidator, checkEmailAvailability, checkPhoneNumberAvailability, authController.registerUser);
authRouter.post('/email', checkEmailForReact);

module.exports = authRouter;