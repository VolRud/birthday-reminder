import { createStore, applyMiddleware, } from 'redux';
import serviceMiddleware from './middlewares/serviceMiddleware';
import reducer from './reducers'; 

const enhancer = applyMiddleware(serviceMiddleware);
export const store = createStore(reducer, {}, enhancer);
