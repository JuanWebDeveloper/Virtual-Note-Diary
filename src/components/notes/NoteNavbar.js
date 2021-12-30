import { useDispatch } from 'react-redux';

import { actionSaveChanges } from '../../actions/notes';

export const NoteNavbar = () => {
	const dispatch = useDispatch();

	const handleSaveChanges = () => {
		dispatch(actionSaveChanges());
	};

	const handleSelectedFile = () => document.getElementById('selectedFile').click();

	const handleSelectedFileChange = (e) => {
		const file = e.target.files[0];

		console.log(file);
	};

	return (
		<div className='notes__note-navbar'>
			<h3>28/10/21</h3>
			<input type='file' style={{ display: 'none' }} id='selectedFile' onChange={handleSelectedFileChange} />

			<div className='notes__note-navbar-buttons'>
				<button onClick={handleSelectedFile}>Picture</button>
				<button onClick={handleSaveChanges}>Save</button>
			</div>
		</div>
	);
};
