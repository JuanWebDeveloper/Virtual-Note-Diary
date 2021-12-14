import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import { AuthRouter } from './AuthRouter';
import { HomePage } from '../components/home/HomePage';

export const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<HomePage />} />
				<Route path='/auth/*' element={<AuthRouter />} />
				<Route path='*' element={<Navigate to='/auth/login' />} />
			</Routes>
		</Router>
	);
};
