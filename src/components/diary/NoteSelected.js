import React from 'react';

export const NoteSelected = () => {
	return (
		<div className='diary__note-selected'>
			<p>
				Select a note
				<br />
				or create a new
			</p>
			<i className='far fa-star fa-4x mt-3'></i>
		</div>
	);
};
