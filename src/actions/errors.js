import { types } from '../types/types';

export const formRegisterError = (errorMessage) => ({
	type: types.formRegisterError,
	payload: errorMessage,
});

export const cleanUpErrors = () => ({
	type: types.cleanUpErrors,
});
