import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCl2MLz0HbSOBCRpXeh9g8aggU4xGyVJJ8",
  authDomain: "cinema-ticket-resevation.firebaseapp.com",
  databaseURL: "https://cinema-ticket-resevation.firebaseio.com",
  projectId: "cinema-ticket-resevation",
  storageBucket: "cinema-ticket-resevation.appspot.com",
  messagingSenderId: "360729741330"
};

firebase.initializeApp(config);

export const databaseRef = firebase.database().ref();

export const filmsRef = databaseRef.child("films");
//export const todosRef = databaseRef.child("todos");
/* export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider(); */