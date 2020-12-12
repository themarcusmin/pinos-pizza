import firebase from "firebase/app";
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app = firebase.initializeApp({
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.REACT_APP - STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
});

export const auth = app.auth();
export default app;

// firebase.auth().signInAnonymously()
//     .then((res) => {
//         console.log(res);
//     }).catch((error) => {
//         const errorCode = error.code;
//         // const errorMsg = error.message;

//         if (errorCode === "auth/operation-not-allowed") {
//             alert("You must enable Anonymous auth  in the firebase console.")
//         } else {
//             console.log(error);
//         }
//     })