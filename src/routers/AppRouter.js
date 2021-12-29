import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { auth, onAuthStateChanged } from '../firebase/firebaseConfig';

import { loginAction } from '../actions/auth';
import { actionOfGetNotes } from '../actions/notes';

import { AuthRouter } from './AuthRouter';
import { PublicRouter } from './PublicRouter';
import { PrivateRouter } from './PrivateRouter';
import { DashboardRouter } from './DashboardRouter';

import { LoadingView } from '../components/layout/LoadingView';

import { getNotes } from '../helpers/getNotes';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const { uid } = useSelector((state) => state.auth);

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

	useEffect(() => {
		const getUserNotes = getNotes(uid);

		getUserNotes
			.then((notes) => {
				dispatch(actionOfGetNotes(notes));
			})
			.catch((error) => {
				console.log(error);
			});
	}, [dispatch, uid]);

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
