const Joi = require('joi');
const { regExp: { EMAIL, PASSWORD, PHONE_NUMBER } } = require('../config');

module.exports = Joi.object({
    name: Joi.string().alphanum().min(2).max(30)
        .required(),
    password: Joi.string().regex(PASSWORD).required(),
    email: Joi.string().regex(EMAIL).required(),
    phoneNumber: Joi.string().regex(PHONE_NUMBER).required()
});