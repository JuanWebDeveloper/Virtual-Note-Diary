import { SingleNote } from './SingleNote';

export const DiaryNotes = () => {
	const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	return (
		<div className='diary__notes'>
			{notes.map((note) => (
				<SingleNote key={note} />
			))}
		</div>
	);
};
