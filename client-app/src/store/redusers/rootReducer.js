import {combineReducers} from 'redux';
import {searchReducer} from './searchReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  search: searchReducer,
  user: userReducer
});