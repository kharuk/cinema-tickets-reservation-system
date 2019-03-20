import {createStore, applyMiddleware, compose} from 'redux';
import {createBrowserHistory} from 'history';
import {rootReducer} from './redusers/rootReducer';
import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension'; 
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase} from 'react-redux-firebase';
import fbConfig from '../services/firebase/initFirebase';



export const history = createBrowserHistory();
const rfConfig = {} 


/* export const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig),
    reduxFirestore(fbConfig)
  )
); *//*  */

/* const createStoreWithFirebase = compose(
  reduxFirestore(fbConfig, rfConfig), 
)(createStore) */


 export const store = createStore(rootReducer, compose(
  applyMiddleware(thunk.withExtraArgument({getFirestore})),
	reduxFirestore(fbConfig,rfConfig)
))