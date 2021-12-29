import { types } from '../types/types';

const initialState = {
	notes: [],
	activeNote: null,
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.noteActive:
			return { ...state, activeNote: { ...action.payload } };
		default:
			return state;
	}
};
