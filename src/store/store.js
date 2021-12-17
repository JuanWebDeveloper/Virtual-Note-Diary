import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import thunk from 'redux-thunk';

// Reducers
import { authReducer } from '../reducers/authReducer';
import { errorsReducer } from '../reducers/errorsReducer';

// Middleware For Asynchronous Requests
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

// Combination Of Reducers
const reducers = combineReducers({
	auth: authReducer,
	errors: errorsReducer,
});

// Store
export const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
