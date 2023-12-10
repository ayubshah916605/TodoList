import { createStore } from 'redux';
import todoReducer from '../reducers/Reducer';

const store = createStore(todoReducer);

export default store;
