import { Link } from 'react-router-dom';

export const HomePage = () => {
	return (
		<div className='home__main'>
			<div className='home__main-content'>
				<h1 className='title'>Welcome Juan</h1>
				<p>You have 10 notes created</p>
				<Link to='/' className='button button-primary'>
					View Notes
				</Link>
			</div>
		</div>
	);
};
