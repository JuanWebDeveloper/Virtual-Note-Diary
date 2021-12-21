import { types } from '../types/types';
import {
	auth,
	googleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	signOut,
} from '../firebase/firebaseConfig';

import { finishLoadingAction, startLoadingAction } from './interface';
import { loginFormValidation, registerFormValidation } from '../helpers/formsValidation';

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
				registerFormValidation({}, dispatch, true, error.message);
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
				dispatch(finishLoadingAction());
				loginFormValidation({}, dispatch, true, error.message);
			});
	};
};

// Action To Logout
export const logoutAction = () => ({ type: types.logout });

// Action To Execute The Logout
export const executeActionLogout = () => {
	return (dispatch) => {
		signOut(auth).then(() => {
			dispatch(logoutAction());
		});
	};
};
