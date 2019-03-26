import {combineReducers} from 'redux';
import {searchReducer} from './searchReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  search: searchReducer
});