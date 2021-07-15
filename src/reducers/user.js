import { LOGIN_INPUT, WATCHLIST_ADD, WATCHLIST_DEL, SEENED_INPUT } from '../actions';

const initialState = {
  name: '',
  password: '',
  email: '',
  watchlist: [],
  seened: [],
}

const user = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_INPUT:
    return { ...state, ...action.payload };
  case WATCHLIST_ADD:
    return { ...state, watchlist: state.watchlist.push(action.pauload) };
  case WATCHLIST_DEL:
    return {
      ...state,
      watchlist: state.watchlist.filter((movie) => movie !== action.payload)
    };
  case SEENED_INPUT:
    return { ...state, seened: state.seened.push(action.payload) };
  default:
    return state;
  };
}

export default user;
