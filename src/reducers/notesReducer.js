import { types } from '../types/types';

const initialState = {
	notes: [],
	activeNote: null,
};

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.noteActive:
			return { ...state, activeNote: { ...action.payload } };

		case types.getNotes:
			return { ...state, notes: [...action.payload] };

		case types.refreshNoteChanges:
			return { ...state, notes: state.notes.map((note) => (note.id === action.payload.noteId ? action.payload.note : note)) };
		default:
			return state;
	}
};
