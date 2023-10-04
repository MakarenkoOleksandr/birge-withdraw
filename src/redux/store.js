import { createStore } from 'redux';
import counterReducer from './redusers';

const store = createStore(counterReducer);

export default store;