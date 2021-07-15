// actions de user

export const LOGIN_INPUT = 'LOGIN_INPUT';
export const WATCHLIST_ADD = 'WATCHLIST_ADD';
export const WATCHLIST_DEL = 'WATCHLIST_DEL';
export const SEENED_INPUT = 'SEENED_INPUT';

export const loginAction = (payload) => ({ type: LOGIN_INPUT, payload });
export const addWatchAction = (payload) => ({ type: WATCHLIST_ADD, payload });
export const delWatchAction = (payload) => ({ type: WATCHLIST_DEL, payload });
export const seenedAction = (payload) => ({ type: SEENED_INPUT, payload });

// actions da database

export const FETCH_DATA = 'FETCH_DATA';

export const fetchData = (payload) => ({ type: FETCH_DATA, payload });
