import validator from 'validator';

import { formRegisterError, cleanUpErrors } from '../actions/errors';

export const registerFormValidation = (valuesToValidate = {}, dispatch) => {
	const { name, email, password, passwordConfirm } = valuesToValidate;
	let validationData = {
		field: '',
		errorStatus: false,
	};

	if (validator.isEmpty(name)) {
		dispatch(formRegisterError('Name is required'));

		validationData = {
			field: 'name',
			errorStatus: false,
		};

		return validationData;
	} else if (validator.isEmpty(email)) {
		dispatch(formRegisterError('Email is required'));

		validationData = {
			field: 'email',
			errorStatus: false,
		};

		return validationData;
	} else if (!validator.isEmail(email)) {
		dispatch(formRegisterError('Email is not valid'));

		validationData = {
			field: 'email',
			errorStatus: false,
		};

		return validationData;
	} else if (validator.isEmpty(password)) {
		dispatch(formRegisterError('Password is required'));

		validationData = {
			field: 'password',
			errorStatus: false,
		};

		return validationData;
	} else if (password.trim().length < 8) {
		dispatch(formRegisterError('Password must be at least 8 characters'));

		validationData = {
			field: 'password',
			errorStatus: false,
		};

		return validationData;
	} else if (validator.isEmpty(passwordConfirm)) {
		dispatch(formRegisterError('Password confirmation is required'));

		validationData = {
			field: 'passwordConfirm',
			errorStatus: false,
		};

		return validationData;
	} else if (!validator.equals(password, passwordConfirm)) {
		dispatch(formRegisterError('Passwords do not match'));

		validationData = {
			field: 'passwords not match',
			errorStatus: false,
		};

		return validationData;
	}

	dispatch(cleanUpErrors());

	validationData = {
		field: '',
		errorStatus: true,
	};

	return validationData;
};
