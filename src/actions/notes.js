import { firestore, addDoc, collection } from '../firebase/firebaseConfig';

export const actionAddNewNote = () => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const newNote = {
			title: '',
			description: '',
			createdAt: new Date().toISOString(),
		};

		const documentReferenceCreated = await addDoc(collection(firestore, `${uid}/diary/notes`), newNote);

		console.log(documentReferenceCreated);
	};
};
