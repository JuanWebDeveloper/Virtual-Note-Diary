import { types } from '../types/types';

// Action To Login
export const loginAction = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});
