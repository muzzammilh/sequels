import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './Reducers/index';

const composeEnhancers = typeof window !== 'undefined' ?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
                window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ :
                (fun)=> fun : ()=> {};

export const store = createStore(
    reducer, composeEnhancers(applyMiddleware(thunk)),
);
