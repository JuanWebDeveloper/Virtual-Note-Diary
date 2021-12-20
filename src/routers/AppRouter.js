import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { auth, onAuthStateChanged } from '../firebase/firebaseConfig';
import { loginAction } from '../actions/auth';

import { AuthRouter } from './AuthRouter';

import { LoadingView } from '../components/layout/LoadingView';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { DashboardRouter } from './DashboardRouter';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [sessionVerification, setSessionVerification] = useState(true);
	const [sessionIsActive, setSessionIsActive] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				dispatch(loginAction(user.uid, user.displayName));
				setSessionIsActive(true);
			} else {
				setSessionIsActive(false);
			}

			setSessionVerification(false);
		});
	}, [dispatch]);

	if (sessionVerification) {
		return <LoadingView />;
	}

	return (
		<Router>
			<Routes>
				<Route
					path='/*'
					element={
						<PrivateRouter sessionIsActive={sessionIsActive}>
							<DashboardRouter />
						</PrivateRouter>
					}
				/>
				<Route
					path='/auth/*'
					element={
						<PublicRouter sessionIsActive={sessionIsActive}>
							<AuthRouter />
						</PublicRouter>
					}
				/>
			</Routes>
		</Router>
	);
};
