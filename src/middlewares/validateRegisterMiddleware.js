const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({min:2}).withMessage("Mínimo 2 caracteres"),
    body('lastName').notEmpty().withMessage('Tienes que escribir un apellido').bail().isLength({min:2}).withMessage("Mínimo 2 caracteres"),
	body('email').notEmpty().withMessage('Tienes que escribir un correo electrónico').bail()
		.isEmail().withMessage("Correo inválido"),
	body('password').notEmpty().withMessage('Tienes que escribir una contraseña').isLength({min:8}).withMessage("Mínimo 8 caracteres"),
	body('birthdate').notEmpty().withMessage('Tienes que poner tu fecha de nacimiento'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.png', '.gif'];

		if (!file) {
			throw new Error('Tienes que subir una imagen');
		} else {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]