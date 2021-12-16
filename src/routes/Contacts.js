const validate = require('../middlewares/validate'); 
const authenticate = require('../middlewares/authorization');

const validationSchemas = require('../validations/Contacts');

const express = require('express');
const { create, index, findContact, deleteContact, update } = require('../controllers/Contacts'); //Fonksiyonlari al

const router = express.Router();

router.route('/').get(authenticate, index);

router.route('/').post(authenticate, validate(validationSchemas.createValidation), create);

router.route('/find').get(findContact);

router.route('/').delete(deleteContact);

router.route('/:id').patch(validate(validationSchemas.updateValidation), update);

module.exports = router;
