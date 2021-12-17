import { types } from '../types/types';

const initialState = {
	errorMessage: '',
	loadign: false,
	withMistakes: false,
};

export const interfaceReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.formRegisterError:
			return {
				...state,
				errorMessage: action.payload,
				withMistakes: true,
			};

		case types.cleanUpErrors:
			return {
				...state,
				errorMessage: '',
				withMistakes: false,
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
