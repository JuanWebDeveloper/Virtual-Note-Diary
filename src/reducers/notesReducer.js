import { types } from '../types/types';

const initialState = {
	notes: [],
	active: null,
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.noteActive:
			return { ...state, active: { ...action.payload } };
		default:
			return state;
	}
};
