import React from 'react';
import { GET_GOOGLE_LOGIN } from './types';
export const get_google_login = () => (dispatch) => {
  dispatch({
    type: GET_GOOGLE_LOGIN,
    payload: res.data,
  });
};
