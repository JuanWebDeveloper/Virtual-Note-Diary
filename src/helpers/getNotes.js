import { firestore, collection, getDocs } from '../firebase/firebaseConfig';

export const getNotes = async (uid) => {
	const snapshot = await getDocs(collection(firestore, `${uid}/diary/notes`));
	const userNotes = [];

	snapshot.forEach((note) => {
		userNotes.push({ id: note.id, ...note.data() });
	});

	console.log(userNotes);
	return userNotes;
};
