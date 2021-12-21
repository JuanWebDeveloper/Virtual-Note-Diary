import validator from 'validator';

import { formRegisterError, cleanUpErrors } from '../actions/interface';

// Resigter Form Validation
export const registerFormValidation = (valuesToValidate = {}, dispatch, errorFirebase = false, errorFirebaseMessage) => {
	let validationData = false;

	if (errorFirebase) {
		if (errorFirebaseMessage === 'Firebase: Error (auth/email-already-in-use).') {
			dispatch(formRegisterError('The email address is already in use by another account', 'email'));
		} else {
			dispatch(formRegisterError(errorFirebaseMessage, ''));
		}

		return validationData;
	} else {
		const { name, email, password, passwordConfirm } = valuesToValidate;

		if (validator.isEmpty(name)) {
			dispatch(formRegisterError('Name is required', 'name'));

			return validationData;
		} else if (validator.isEmpty(email)) {
			dispatch(formRegisterError('Email is required', 'email'));

			return validationData;
		} else if (!validator.isEmail(email)) {
			dispatch(formRegisterError('Email is not valid', 'email'));

			return validationData;
		} else if (validator.isEmpty(password)) {
			dispatch(formRegisterError('Password is required', 'password'));

			return validationData;
		} else if (password.trim().length < 8) {
			dispatch(formRegisterError('Password must be at least 8 characters', 'password'));

			return validationData;
		} else if (validator.isEmpty(passwordConfirm)) {
			dispatch(formRegisterError('Password confirmation is required', 'passwordConfirm'));

			return validationData;
		} else if (!validator.equals(password, passwordConfirm)) {
			dispatch(formRegisterError('Passwords do not match', 'passwords not match'));

			return validationData;
		}

		dispatch(cleanUpErrors());

		validationData = true;

		return validationData;
	}
};

// Login Form Validation
export const loginFormValidation = (valuesToValidate = {}, dispatch, errorFirebase = false, errorFirebaseMessage) => {
	let validationData = false;

	if (errorFirebase) {
		if (errorFirebaseMessage === 'Firebase: Error (auth/wrong-password).') {
			dispatch(formRegisterError('Incorrect password', 'password'));
		} else if (errorFirebaseMessage === 'Firebase: Error (auth/user-not-found).') {
			dispatch(formRegisterError('Email address is not registered', 'email'));
		} else {
			dispatch(formRegisterError(errorFirebaseMessage, ''));
		}

		return validationData;
	} else {
		const { email, password } = valuesToValidate;

		if (validator.isEmpty(email)) {
			dispatch(formRegisterError('Email is required', 'email'));

			return validationData;
		} else if (!validator.isEmail(email)) {
			dispatch(formRegisterError('Email is not valid', 'email'));

			return validationData;
		} else if (validator.isEmpty(password)) {
			dispatch(formRegisterError('Password is required', 'password'));

			return validationData;
		} else if (password.trim().length < 8) {
			dispatch(formRegisterError('Password must be at least 8 characters', 'password'));

			return validationData;
		}
	}

	dispatch(cleanUpErrors());

	validationData = true;

	return validationData;
};
