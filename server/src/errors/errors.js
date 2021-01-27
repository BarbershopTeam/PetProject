const { responseCodes: {BAD_REQUEST, FORBIDDEN, NOT_CONTENT, UNAUTHORIZED } } = require('../config');

module.exports = {
    NOT_VALID_EMAIL: {
        message: 'This email is already taken',
        code: BAD_REQUEST
    },

    NOT_VALID_PHONE_NUMBER: {
        message: 'This phone number is already used',
        code: BAD_REQUEST
    },

    NOT_VALID_ID: {
        message: 'This ID is incorrect',
        code: BAD_REQUEST
    },

    NOT_VALID_BODY: {
        message: 'Invalid request, please double-check your data',
        code: FORBIDDEN
    },

    NOT_CONTENT: {
        message: 'User deleted successfully',
        code: NOT_CONTENT
    },

    WRONG_USERNAME_OR_PASS: {
        message: 'Username or password is not valid',
        code: BAD_REQUEST
    },

    NOT_VALID_TOKEN: {
        message: 'Not valid token',
        code: UNAUTHORIZED
    },

    PERMISSION_DENIED: {
        message: 'Permission denied',
        code: FORBIDDEN
    }
};
