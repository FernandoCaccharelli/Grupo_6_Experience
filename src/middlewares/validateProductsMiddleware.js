const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').notEmpty().withMessage('Tienes que escribir un nombre').bail().isLength({min:5}).withMessage("Mínimo 2 caracteres"),
    body('description').notEmpty().withMessage('Tienes que dar una descripción').bail().isLength({min:20}).withMessage("Mínimo 20 caracteres"), body('expiration_date').notEmpty().withMessage('Tienes que poner una fecha'),
	body('price').notEmpty().withMessage('Tienes que darle un precio'),
	body('people').notEmpty().withMessage('Tienes que darle una cantidad de personas'),
	body('image').custom((value, { req }) => {
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