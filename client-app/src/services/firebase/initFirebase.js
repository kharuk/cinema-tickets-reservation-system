import firebase from 'firebase/app';
//import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyCl2MLz0HbSOBCRpXeh9g8aggU4xGyVJJ8",
  authDomain: "cinema-ticket-resevation.firebaseapp.com",
  databaseURL: "https://cinema-ticket-resevation.firebaseio.com",
  projectId: "cinema-ticket-resevation",
  storageBucket: "cinema-ticket-resevation.appspot.com",
  messagingSenderId: "360729741330"
};

firebase.initializeApp(config);
firebase.firestore();
//firebase.firestore().settings();
export default firebase;
//export const databaseRef = firebase.database();

//export const filmsRef = databaseRef.child("films/");
//export const todosRef = databaseRef.child("todos");
/* export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider(); */