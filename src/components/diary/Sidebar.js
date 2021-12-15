import { DiaryNotes } from './DiaryNotes';

export const Sidebar = () => {
	return (
		<div className='diary__sidebar'>
			<div className='diary__sidebar-navbar'>
				<h3>
					<i className='fa fa-user-circle'></i> <span>Juan</span>
				</h3>

				<button className='diary__sidebar-navbar-logout'>Logout</button>
			</div>

			<div className='diary__new-note'>
				<i className='far fa-calendar-plus fa-5x'></i>
				<p>New Note</p>
			</div>

			<DiaryNotes />
		</div>
	);
};
