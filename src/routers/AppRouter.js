import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { auth, onAuthStateChanged } from '../firebase/firebaseConfig';
import { loginAction } from '../actions/auth';

import { AuthRouter } from './AuthRouter';
import { HomePage } from '../components/home/HomePage';
import { DiaryView } from '../components/diary/DiaryView';
import { LoadingView } from '../components/layout/LoadingView';

export const AppRouter = () => {
	const dispatch = useDispatch();
	const [sessionVerification, setSessionVerification] = useState(true);
	const [sessionIsActive, setSessionIsActive] = useState(false);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user?.uid) {
				dispatch(loginAction(user.uid, user.displayName));
				setSessionIsActive(false);
			} else {
				setSessionIsActive(true);
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
				<Route exact path='/' element={<HomePage />} />
				<Route exact path='/diary/' element={<DiaryView />} />
				<Route path='/auth/*' element={<AuthRouter />} />
				<Route path='*' element={<Navigate to='/auth/login' />} />
			</Routes>
		</Router>
	);
};
