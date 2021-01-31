const { userService: { findUserByEmail, findUserByPhoneNumber } } = require('../services');
const { ErrorHandler, errors } = require('../errors');
const { responseCodes: { BAD_REQUEST } } = require('../config');
const { userValidator } = require('../validators');

module.exports = {
    registrationValidator: async (req, res, next) => {
                try {
                    const { error } = await userValidator.validate(req.body);

                    if (error) {
                        throw new ErrorHandler(error.details[0].message, BAD_REQUEST);
                    }

                    next();
        } catch (e) {
            next(e)
        }
    },
    checkEmailAvailability: async (req, res, next) => {
        try {
            const {email} = req.body;

            const foundUser = await findUserByEmail(email);

            if (foundUser) {
                return next(
                    new ErrorHandler(
                        errors.NOT_VALID_EMAIL.message,
                        errors.NOT_VALID_EMAIL.code
                    )
                );
            }

            next();
        } catch (e) {
            next(e);
        }
    },
    checkPhoneNumberAvailability: async (req, res, next) => {
        try {
            const {phoneNumber} = req.body;

            const foundUser = await findUserByPhoneNumber(phoneNumber);

            if (foundUser) {
                return next(
                    new ErrorHandler(
                        errors.NOT_VALID_PHONE_NUMBER.message,
                        errors.NOT_VALID_PHONE_NUMBER.code
                    )
                );
            }

            next();
        } catch (e) {
            next(e);
        }
    }

};