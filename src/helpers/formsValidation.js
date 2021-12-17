import validator from 'validator';

export const registerFormValidation = (valuesToValidate = {}) => {
	const { name, email, password, passwordConfirm } = valuesToValidate;

	if (validator.isEmpty(name)) {
		return 'Name is required';
	} else if (validator.isEmpty(email)) {
		return 'Email is required';
	} else if (!validator.isEmail(email)) {
		return 'Email is invalid';
	} else if (validator.isEmpty(password)) {
		return 'Password is required';
	} else if (password.trim().length < 8) {
		return 'The password must have a minimum of 8 characters';
	} else if (validator.isEmpty(passwordConfirm)) {
		return 'Password confirm is required';
	} else if (!validator.equals(password, passwordConfirm)) {
		return 'Password and password confirm must be the same';
	}

	return true;
};
