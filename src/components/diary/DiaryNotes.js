import { useSelector } from 'react-redux';
import { SingleNote } from './SingleNote';

export const DiaryNotes = () => {
	const { notes } = useSelector((state) => state.notes);

	return (
		<div className='diary__notes'>
			{notes.map((note) => (
				<SingleNote key={note.id} {...note} />
			))}
		</div>
	);
};
