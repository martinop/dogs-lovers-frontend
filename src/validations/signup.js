import {
	required,
	validateEmail,
	samePassword,
	validPassword,
	validate,
} from './helpers';

export default ({
	email,
	password,
	repeatPassword,
}) =>
	validate({
		email: required(email) || validateEmail(email),
		password: required(password) || validPassword(password),
		repeatPassword: required(repeatPassword) || samePassword(password, repeatPassword),
	});
