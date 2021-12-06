import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDCQWCBAr3CoLv-H3KeUFVk_lN7vLdgXys",
    authDomain: "littlebrainmath.firebaseapp.com",
    projectId: "littlebrainmath",
    storageBucket: "littlebrainmath.appspot.com",
    messagingSenderId: "1026784091678",
    appId: "1:1026784091678:web:86462a4407f69aad0b580f"
};



export const firebaseApp=firebase.initializeApp(firebaseConfig)