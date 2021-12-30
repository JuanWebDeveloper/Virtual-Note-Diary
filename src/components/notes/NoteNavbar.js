import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';

import { actionSaveChanges, actionToUploadImage } from '../../actions/notes';

export const NoteNavbar = () => {
	const dispatch = useDispatch();
	const { activeNote } = useSelector((state) => state.notes);

	const handleSaveChanges = () => {
		dispatch(actionSaveChanges());
	};

	const handleSelectedFile = () => document.getElementById('selectedFile').click();

	const handleSelectedFileChange = (e) => {
		const file = e.target.files[0];

		file && dispatch(actionToUploadImage(file));
	};

	return (
		<div className='notes__note-navbar'>
			{activeNote.updatedAt ? (
				<h3>
					Last modified on <span>{moment(activeNote.updatedAt).format('MMMM D YYYY, h:mm a')}</span>
				</h3>
			) : (
				<h3>
					Was created the <span>{moment(activeNote.createdAt).format('MMMM D YYYY, h:mm a')}</span>
				</h3>
			)}

			<input type='file' style={{ display: 'none' }} id='selectedFile' onChange={handleSelectedFileChange} />

			<div className='notes__note-navbar-buttons'>
				<button onClick={handleSelectedFile}>Picture</button>
				<button onClick={handleSaveChanges}>Save</button>
			</div>
		</div>
	);
};
