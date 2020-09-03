import {
  LOGIN_SUCCESS,
  LOGIN_fALIED,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
} from "../Constants";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS: {
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        // token: action.payload.token,
        // user: action.payload.user,
        ...action.payload,
        isAuthenticated: true,
      };
    }
    case USER_LOADED:
      return { ...state, isAuthenticated: true, user: action.payload };
    case LOGIN_fALIED:
    case AUTH_ERROR:
    case REGISTER_FAILED:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        token: null,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
