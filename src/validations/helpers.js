import isEmpty from 'lodash/isEmpty';

const ERRORS = {
	REQUIRED: 'Requerido',
	INVALID: 'Invalido',
};
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i;

export const validateEmail = email => {
	return emailRegex.test(email) ? null : ERRORS.INVALID;
};

export const isPasswordDifferent = (password, repeatPassword) =>
	password !== repeatPassword ? 'Contraseñas no coinciden' : false;

export function validate(errors) {
	let _errors = {};
	Object.keys(errors).forEach(key => {
		const _error = errors[key];
		if (_error) {
			_errors[key] = _error;
		}
	});
	return isEmpty(_errors) ? null : _errors;
}

export const required = field => {
	switch (typeof field) {
		case 'string':
		case 'object':
			return isEmpty(field) ? ERRORS.REQUIRED : null;
		case 'number':
			return handleNumber(isNumeric(field), field);
		case 'boolean':
			const bool = field === true || field === false;
			return !bool ? ERRORS.REQUIRED : null;
		default:
			return ERRORS.REQUIRED;
	}
};

export const samePassword = (password, repeatPassowrd) =>
	password === repeatPassowrd ? null : 'No es la misma contraseña';

export const validPassword = password => {
	if (password.length < 8) {
		return 'Contraseña debe tener al menos 8 caracteres';
	}  else if (password.search(/[^a-zA-Z0-9!@#$%^&*()_+.]/) !== -1) {
		return 'Contiene un caracter no valido';
	}
	return null;
};
