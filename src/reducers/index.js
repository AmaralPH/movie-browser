import { combineReducers } from 'redux';
import user from './user.js';
import database from './database.js';

const rootReducer = combineReducers({
  user,
  database,
})

export default rootReducer;
