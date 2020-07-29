import { required, validateEmail, validate } from './helpers';

export default ({ email, password }) =>
	validate({
		email: required(email) || validateEmail(email),
		password: required(password),
	});
