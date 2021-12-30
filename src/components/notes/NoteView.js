import { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { useForm } from '../../hooks/useForm';

import { NoteNavbar } from './NoteNavbar';

export const NoteView = () => {
	const { activeNote } = useSelector((state) => state.notes);
	const activeNoteId = useRef(activeNote.noteId);

	const [formValues, handleInputChange, reset] = useForm(activeNote);
	const { title, description } = formValues;

	useEffect(() => {
		if (activeNote.noteId !== activeNoteId.current) {
			reset(activeNote);
			activeNoteId.current = activeNote.noteId;
		}
	}, [activeNote, reset]);

	return (
		<div className='notes__main'>
			<NoteNavbar {...formValues} />

			<div className='notes__main-content'>
				<input
					type='text'
					placeholder='Start the note with an awesome title'
					className='notes__title-input'
					name='title'
					autoComplete='off'
					value={title}
					onChange={handleInputChange}
				/>
				<textarea
					placeholder='Write in detail what happened today'
					className='notes__textarea'
					name='description'
					value={description}
					onChange={handleInputChange}
				></textarea>

				{activeNote.imageUrl && (
					<div className='notes__image'>
						<img src={`${activeNote.imageUrl}`} alt={title} />
					</div>
				)}
			</div>
		</div>
	);
};
