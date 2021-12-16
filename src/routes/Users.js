//validate middleware
const validate = require('../middlewares/validate');
//validations
const validationSchemas = require('../validations/Users')

const express = require('express');
const { create, index, login } = require('../controllers/Users'); 

const router = express.Router();

router.get('/', index);

router.route('/').post(validate(validationSchemas.createValidation), create);
router.route('/login').post(validate(validationSchemas.loginValidation), login);

module.exports = router;
