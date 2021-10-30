import { GET_GOOGLE_LOGIN, GOOGLE_LOGOUT } from '../actions/types';
import isEmpty from '../validation/isEmpty';
const initialState = {
  googleAuthenticated: false,
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
    default:
      return state;
  }
}
