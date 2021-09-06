import { combineReducers } from 'redux';
import loginReducer from './login';
import clientsReducer from './client';

const reducers = combineReducers({ loginReducer, clientsReducer });

export default reducers;