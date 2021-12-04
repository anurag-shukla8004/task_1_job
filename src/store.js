import { createStore } from 'redux';
import { reducer } from './reducers/addCategory';

export const store = createStore(reducer);
