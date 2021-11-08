import React from 'react';
import { GET_GOOGLE_LOGIN, SET_USER } from './types';
// export const get_google_login = () => (dispatch) => {
//   dispatch({
//     type: GET_GOOGLE_LOGIN,
//     payload: res.data,
//   });
// };

export const setUser = (data) => (dispatch) => {
  dispatch({
    type: SET_USER,
    payload: data,
  });
};
