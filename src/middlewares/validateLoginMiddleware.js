const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage("Correo inválido"),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña')
	
]