const Joi = require('joi');

const createValidation = Joi.object({
    name: Joi.string().required(),
    //sName: Joi.string(),
    phoneNum: Joi.string().required().min(11)
});

const updateValidation = Joi.object({
    name: Joi.string().required(),
    //sName: Joi.string(),
    phoneNum: Joi.string().required().min(11)
});

module.exports = {
    createValidation,
    updateValidation
};