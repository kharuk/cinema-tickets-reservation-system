import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {rootReducer} from './redusers/rootReducer';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import fbConfig from '../services/firebase/initFirebase';

export const history = createBrowserHistory();
const rfConfig = {} 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootReducer, composeEnhancers(
//export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirestore})),
	reduxFirestore(fbConfig,rfConfig)
))