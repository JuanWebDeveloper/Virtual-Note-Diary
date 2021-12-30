import { firestore, addDoc, collection, doc, updateDoc } from '../firebase/firebaseConfig';
import { types } from '../types/types';

export const actionAddNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const newNote = {
			title: '',
			description: '',
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

export const actionOfGetNotes = (notes) => ({
	type: types.getNotes,
	payload: notes,
});

export const actionSaveChanges = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;
		const { activeNote } = getState().notes;

		!activeNote.imageUrl && delete activeNote.imageUrl;

		const noteToSend = {
			...activeNote,
			updatedAt: new Date().toISOString(),
		};
		delete noteToSend.noteId;

		await updateDoc(doc(firestore, `${uid}/diary/notes/${activeNote.noteId}`), noteToSend);
		dispatch(actionOfUpdateChanges(activeNote.noteId, noteToSend));
	};
};

export const actionOfUpdateChanges = (noteId, note) => ({
	type: types.refreshNoteChanges,
	payload: {
		noteId,
		note: {
			id: noteId,
			...note,
		},
	},
});
