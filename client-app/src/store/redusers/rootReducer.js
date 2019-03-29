import {combineReducers} from 'redux';
import {searchReducer} from './searchReducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase'
import { userReducer } from './userReducer';
import {reducer as toastrReducer} from 'react-redux-toastr'

export const rootReducer = combineReducers({
  firestore: firestoreReducer,
  toastr: toastrReducer,
  search: searchReducer,
  user: userReducer
});