import { Sidebar } from './Sidebar';
// import { NoteSelected } from './NoteSelected';
import { NoteView } from '../notes/NoteView';

export const DiaryView = () => {
	return (
		<div className='diary__main'>
			<Sidebar />

			<section>
				{/* <NoteSelected /> */}
				<NoteView />
			</section>
		</div>
	);
};
