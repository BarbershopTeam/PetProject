const { Router } = require('express');
const { authController } = require('../controllers');
const { authMiddleware: { registrationValidator, checkEmailAvailability, checkPhoneNumberAvailability } } = require('../middlewares')

const authRouter = Router();

authRouter.post('/', registrationValidator, checkEmailAvailability, checkPhoneNumberAvailability, authController.registerUser);

module.exports = authRouter;