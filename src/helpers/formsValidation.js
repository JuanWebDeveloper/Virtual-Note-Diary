import validator from 'validator';

import { formRegisterError, cleanUpErrors } from '../actions/errors';

export const registerFormValidation = (valuesToValidate = {}, dispatch) => {
	const { name, email, password, passwordConfirm } = valuesToValidate;

	if (validator.isEmpty(name)) {
		dispatch(formRegisterError('Name is required'));
		return false;
	} else if (validator.isEmpty(email)) {
		dispatch(formRegisterError('Email is required'));
		return false;
	} else if (!validator.isEmail(email)) {
		dispatch(formRegisterError('Email is not valid'));
		return false;
	} else if (validator.isEmpty(password)) {
		dispatch(formRegisterError('Password is required'));
		return false;
	} else if (password.trim().length < 8) {
		dispatch(formRegisterError('Password must be at least 8 characters'));
		return false;
	} else if (validator.isEmpty(passwordConfirm)) {
		dispatch(formRegisterError('Password confirmation is required'));
		return false;
	} else if (!validator.equals(password, passwordConfirm)) {
		dispatch(formRegisterError('Passwords do not match'));
		return false;
	}

	dispatch(cleanUpErrors());
	return true;
};
