import { types } from '../types/types';
import {
	auth,
	googleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
} from '../firebase/firebaseConfig';

import { finishLoadingAction, startLoadingAction } from './interface';

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

// Action To Register
export const registerAction = (name, email, password) => {
	return (dispatch) => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(auth.currentUser, { displayName: name });
				dispatch(loginAction(user.uid, user.displayName));
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

// Action To Login With Email And Password
export const loginWithEmailAndPasswordAction = (email, password) => {
	return (dispatch) => {
		dispatch(startLoadingAction());
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(loginAction(user.uid, user.displayName));
				dispatch(finishLoadingAction());
			})
			.catch((error) => {
				console.log(error);
				dispatch(finishLoadingAction());
			});
	};
};
