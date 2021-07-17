import { combineReducers } from 'redux';
import user from './user.js';
import database from './database.js';
import initialPage from './initialPage';

const rootReducer = combineReducers({
  user,
  database,
  initialPage,
})

export default rootReducer;
