import { useSelector } from 'react-redux';

import { Sidebar } from './Sidebar';
import { NoteSelected } from './NoteSelected';
import { NoteView } from '../notes/NoteView';

export const DiaryView = () => {
	const { activeNote } = useSelector((state) => state.notes);

	return (
		<div className='diary__main'>
			<Sidebar />

			<section>{activeNote ? <NoteView /> : <NoteSelected />}</section>
		</div>
	);
};
