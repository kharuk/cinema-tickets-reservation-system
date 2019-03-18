import {createStore} from 'redux';
import {createBrowserHistory} from 'history';
import {rootReducer} from './redusers/rootReducer';



export const history = createBrowserHistory();

export const store = createStore(rootReducer);