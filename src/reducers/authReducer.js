import {
  GET_GOOGLE_LOGIN,
  GOOGLE_LOGOUT,
  SET_USER,
  LOG_OUT,
} from '../actions/types';
import isEmpty from '../validation/isEmpty';
const initialState = {
  googleAuthenticated: false,
  isAuthenticated: false,
  email: '',
  password: '',
  name: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_GOOGLE_LOGIN:
      return {
        ...state,
        googleAuthenticated: !isEmpty(action.payload),
      };
    case GOOGLE_LOGOUT:
      return {
        ...state,
        googleAuthenticated: false,
      };
    case SET_USER:
      state.isAuthenticated = !isEmpty(action.payload);
      state.email = action.payload.email;
      state.password = action.payload.password;
      return state;

    case LOG_OUT:
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
}
