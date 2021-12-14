import { Routes, Route, Navigate } from 'react-router-dom';

import { LoginView } from '../components/auth/LoginView';
import { RegisterView } from '../components/auth/RegisterView';

export const AuthRouter = () => {
	return (
		<Routes>
			<Route exact path='/login' element={<LoginView />} />
			<Route exact path='/register' element={<RegisterView />} />
			<Route path='*' element={<Navigate to='/auth/login' />} />
		</Routes>
	);
};
