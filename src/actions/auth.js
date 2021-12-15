import { types } from '../types/types';
import { auth, googleAuthProvider, signInWithPopup } from '../firebase/firebaseConfig';

// Action To Login
export const loginAction = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName,
	},
});

// Action To login With Google
export const loginWithGoogleAction = () => {
	return (dispatch) => {
		signInWithPopup(auth, googleAuthProvider).then(({ user }) => {
			dispatch(loginAction(user.uid, user.displayName));
		});
	};
};
