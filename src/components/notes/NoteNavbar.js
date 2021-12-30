import { useDispatch } from 'react-redux';

import { actionSaveChanges } from '../../actions/notes';

export const NoteNavbar = () => {
	const dispatch = useDispatch();

	const handleSaveChanges = () => {
		dispatch(actionSaveChanges());
	};

	return (
		<div className='notes__note-navbar'>
			<h3>28/10/21</h3>

			<div className='notes__note-navbar-buttons'>
				<button>Picture</button>
				<button onClick={handleSaveChanges}>Save</button>
			</div>
		</div>
	);
};
