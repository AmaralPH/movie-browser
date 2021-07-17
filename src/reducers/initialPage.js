import { CHANGE_PAGE } from '../actions';

const inicialState = {
  page: 1,
}

const initialPage = (state = inicialState, action) => {
  switch (action.type) {
  case CHANGE_PAGE:
    return { ...state, page: action.payload };
  default:
    return state;
  };
}

export default initialPage;
