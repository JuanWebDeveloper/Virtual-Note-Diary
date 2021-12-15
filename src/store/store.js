import { combineReducers, createStore } from 'redux';

// Reducers
import { authReducer } from '../reducers/authReducer';

// Combination Of Reducers
const reducers = combineReducers({
	auth: authReducer,
});

// Store
export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
