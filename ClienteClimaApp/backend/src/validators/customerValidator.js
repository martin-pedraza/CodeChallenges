const { body } = require('express-validator');

const mandatoryFieldsValidator = [
	body('nombres').notEmpty().withMessage('Nombres es obligatorio.'),
	body('apellidos').notEmpty().withMessage('Apellidos es obligatorio.'),
	body('cuit').notEmpty().withMessage('CUIT es obligatorio.'),
	body('telefonoCelular').notEmpty().withMessage('Telefono celular es obligatorio.'),
	body('email').notEmpty().withMessage('Email es obligatorio.'),
];

const fieldsFormatValidator = [
	body('email').optional().isEmail().withMessage('Email no tiene un formato válido (abc@email.com).'),
    body('cuit').optional().matches(/^(\d{2})-\d{8}-\d$/).withMessage('CUIT no tiene un formato válido (20-11223344-7).'),
    body('fechaDeNacimiento')
		.optional()
		.matches(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)
		.withMessage('Fecha de nacimiento no tiene un formato válido (12/25/1990).')
		.custom((value, { req }) => {
            const [month, day, year] = value.split('/');
            if (!isValidDate(month, day, year)) {
                throw new Error('La fecha de nacimiento no es válido.');
            }
            return true;
        }),
];

function isValidDate(month, day, year) {
    const dayInt = parseInt(day, 10);
    const monthInt = parseInt(month, 10);
	const yearInt = parseInt(year, 10)

    return dayInt >= 1 && dayInt <= 31 && monthInt >= 1 && monthInt <= 12 && yearInt > 1900 && yearInt <= 2024;
}

module.exports = { mandatoryFieldsValidator, fieldsFormatValidator };