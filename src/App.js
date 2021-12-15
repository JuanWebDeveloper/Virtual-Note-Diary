import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';

// Store Of The Application
import { store } from './store/store';

// App Styles
import './assets/styles/styles.scss';

export const App = () => {
	return (
		<Provider store={store}>
			<AppRouter />
		</Provider>
	);
};
