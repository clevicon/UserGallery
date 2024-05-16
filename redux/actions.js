export const ADD_TOKEN = 'ADD_TOKEN';
export const REMOVE_TOKEN = 'REMOVE_TOKEN';

export const addToken = (token) => ({
  type: ADD_TOKEN,
  payload: token,
})

export const removeToken = () => ({
    type: REMOVE_TOKEN,
    payload: null,
  });