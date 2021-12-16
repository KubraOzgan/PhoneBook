const Joi = require('joi');

const createValidation = Joi.object({
    name: Joi.string().required().min(2),
    sName: Joi.string().required().min(2),
    password: Joi.string().required().min(8),
    email:Joi.string().email().required().min(11)
});

const loginValidation = Joi.object({
    password: Joi.string().required().min(8),
    email:Joi.string().email().required().min(11)
});

module.exports = {
    createValidation,
    loginValidation
};