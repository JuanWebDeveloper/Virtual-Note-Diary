import { types } from '../types/types';

const initialState = {
	messageError: '',
	loadign: false,
	withMistakes: false,
};

export const errorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.formRegisterError:
			return {
				...state,
				messageError: action.payload,
				withMistakes: true,
			};

		case types.cleanUpErrors:
			return {
				...state,
				messageError: '',
				withMistakes: false,
			};
		default:
			return state;
	}
};
