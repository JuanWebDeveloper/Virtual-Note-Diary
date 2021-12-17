import { types } from '../types/types';

export const formRegisterError = (errorMessage) => ({
	type: types.formRegisterError,
	payload: errorMessage,
});

export const cleanUpErrors = () => ({
	type: types.cleanUpErrors,
});

// Action to start to loading
export const startLoadingAction = () => ({
	type: types.startLoading,
});

// Action To finish To Loading
export const finishLoadingAction = () => ({
	type: types.finishLoading,
});
