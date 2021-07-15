import { FETCH_DATA } from '../actions';

const inicialState = {
  data: [],
}

const database = (state = inicialState, action) => {
  switch (action.type) {
  case FETCH_DATA:
    return { ...state, data: action.payload };
  default:
    return state;
  };
}

export default database;
