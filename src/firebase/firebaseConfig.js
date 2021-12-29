import { initializeApp } from 'firebase/app';

// Imports To Work With Firebase Authentication
import {
	getAuth,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
} from 'firebase/auth';

// Imports To Work With Firebase Firestore
import { getFirestore, addDoc, collection, doc, getDocs, updateDoc } from 'firebase/firestore';

// Firebase Config
const firebaseConfig = {
	apiKey: 'AIzaSyBu_3pl8FfOt-0vhyp53f6_aWT4VJrCNZo',
	authDomain: 'virtual-note-diary.firebaseapp.com',
	projectId: 'virtual-note-diary',
	storageBucket: 'virtual-note-diary.appspot.com',
	messagingSenderId: '966943977237',
	appId: '1:966943977237:web:295ecaa5a92bcd8269031c',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication Settings
const auth = getAuth();
const googleAuthProvider = new GoogleAuthProvider();

// Firebase Firestore Settings
const firestore = getFirestore();

export {
	firebaseApp,
	auth,
	googleAuthProvider,
	signInWithPopup,
	createUserWithEmailAndPassword,
	updateProfile,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	signOut,
	firestore,
	addDoc,
	collection,
	doc,
	getDocs,
	updateDoc,
};
