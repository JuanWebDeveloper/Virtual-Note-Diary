import { types } from '../types/types';

const initialState = {
	errorMessage: '',
	loadign: false,
	withMistakes: false,
	validateField: '',
};

export const interfaceReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.formRegisterError:
			return {
				...state,
				errorMessage: action.payload,
				withMistakes: true,
				validateField: action.field,
			};

		case types.cleanUpErrors:
			return {
				...state,
				errorMessage: '',
				withMistakes: false,
				validateField: '',
			};

		case types.startLoading:
			return {
				...state,
				loadign: true,
			};

		case types.finishLoading:
			return {
				...state,
				loadign: false,
			};
		default:
			return state;
	}
};
