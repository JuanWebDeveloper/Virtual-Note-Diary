import { initializeApp } from 'firebase/app';

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

export { firebaseApp };
