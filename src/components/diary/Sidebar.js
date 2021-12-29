import { useDispatch, useSelector } from 'react-redux';

import { executeActionLogout } from '../../actions/auth';
import { actionAddNewNote } from '../../actions/notes';

import { DiaryNotes } from './DiaryNotes';

export const Sidebar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);

	const handleLogout = () => {
		dispatch(executeActionLogout());
	};

	const handleAddNewNote = () => {
		dispatch(actionAddNewNote());
	};

	return (
		<div className='diary__sidebar'>
			<div className='diary__sidebar-navbar'>
				<h3>
					<i className='fa fa-user-circle'></i> <span>{name}</span>
				</h3>

				<button className='diary__sidebar-navbar-logout' onClick={handleLogout}>
					Logout
				</button>
			</div>

			<div className='diary__new-note' onClick={handleAddNewNote}>
				<i className='far fa-calendar-plus fa-5x'></i>
				<p>New Note</p>
			</div>

			<DiaryNotes />
		</div>
	);
};
