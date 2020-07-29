import { required, validate } from './helpers';

export default ({ age, name }) =>
	validate({
		age: required(age),
		name: required(name),
	});
