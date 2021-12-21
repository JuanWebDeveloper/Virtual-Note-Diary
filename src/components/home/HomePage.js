import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const HomePage = () => {
	const { name } = useSelector((state) => state.auth);

	return (
		<div className='home__main'>
			<div className='home__main-content'>
				<h1 className='title'>Welcome {name}</h1>
				<p style={{ marginBottom: '40px' }}>
					You have <span>10</span> notes created.
				</p>
				<Link to='/diary/' className='button'>
					View Notes
				</Link>
			</div>
		</div>
	);
};
