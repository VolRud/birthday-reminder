import { createStore, applyMiddleware, } from 'redux';
import reducer from './reducers'; 

const enhancer = applyMiddleware();
export const store = createStore(reducer, {}, enhancer);
