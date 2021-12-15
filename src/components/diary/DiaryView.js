import { Sidebar } from './Sidebar';
import { NoteSelected } from './NoteSelected';

export const DiaryView = () => {
	return (
		<div className='diary__main'>
			<Sidebar />

			<section>
				<NoteSelected />
			</section>
		</div>
	);
};
