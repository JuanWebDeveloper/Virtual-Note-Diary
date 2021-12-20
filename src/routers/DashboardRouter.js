import { Navigate, Route, Routes } from 'react-router-dom';

import { HomePage } from '../components/home/HomePage';
import { DiaryView } from '../components/diary/DiaryView';

export const DashboardRouter = () => {
	return (
		<Routes>
			<Route exact path='/' element={<HomePage />} />
			<Route exact path='/diary/' element={<DiaryView />} />
			<Route path='*' element={<Navigate to='/auth/login' />} />
		</Routes>
	);
};
