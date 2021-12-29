import { firestore, addDoc, collection } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const actionAddNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const newNote = {
			title: 'Hello',
			description: 'Hello World',
			createdAt: new Date().toISOString(),
		};

		const documentReferenceCreated = await addDoc(collection(firestore, `${uid}/diary/notes`), newNote);

		dispatch(actionNoteActive(documentReferenceCreated.id, newNote));
	};
};

export const actionNoteActive = (noteId, note) => ({
	type: types.noteActive,
	payload: { noteId, ...note },
});
