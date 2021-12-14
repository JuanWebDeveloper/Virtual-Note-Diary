import { Link } from 'react-router-dom';

export const HomePage = () => {
	return (
		<div className='home__main'>
			<div className='home__main-content'>
				<h1 className='title'>Welcome Juan</h1>
				<p style={{ marginBottom: '40px' }}>
					You have <span>10</span> notes created.
				</p>
				<Link to='/' className='button'>
					View Notes
				</Link>
			</div>
		</div>
	);
};
