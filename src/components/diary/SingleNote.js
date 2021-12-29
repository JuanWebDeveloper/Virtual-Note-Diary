import { useDispatch } from 'react-redux';
import moment from 'moment';

export const SingleNote = ({ id, title, description, createdAt, imageUrl }) => {
	const dispatch = useDispatch();
	const creationDateFormatting = moment(createdAt);

	return (
		<div className='diary__single-note'>
			{imageUrl && (
				<div
					className='diary__single-note-picture'
					style={{
						backgroundSize: 'cover',
						backgroundImage: `url(${imageUrl})`,
					}}
				></div>
			)}

			<div className='diary__single-note-body'>
				<p className='diary__single-note-title'>{title}</p>
				{!imageUrl && <p className='diary__single-note-description'>{description}</p>}
			</div>

			<div className='diary__single-note-date-box'>
				<span>{creationDateFormatting.format('dddd')}</span>
				<h4>{creationDateFormatting.format('D')}</h4>
			</div>
		</div>
	);
};
