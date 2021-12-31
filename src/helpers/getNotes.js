import { query, orderBy } from 'firebase/firestore';
import { firestore, collection, getDocs } from '../firebase/firebaseConfig';

export const getNotes = async (uid) => {
	const notesRef = collection(firestore, `${uid}/diary/notes`);
	const q = query(notesRef, orderBy('createdAt', 'desc'));
	const snapshot = await getDocs(q);

	const userNotes = [];

	snapshot.forEach((note) => {
		userNotes.push({ id: note.id, ...note.data() });
	});

	return userNotes;
};
