import {
  LOGIN_SUCCESS,
  LOGIN_fALIED,
  LOGOUT_SUCCESS,
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
} from "../Constants";
import { loading, doneLoading, error } from "./LoadingErrorActions";
import axios from "axios";

export const registration = (registerDetail) => (dispatch) => {
  const { username, email, password } = registerDetail;
  //   headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //   request body
  const body = JSON.stringify({ username, email, password });
  dispatch(loading());

  axios
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
      dispatch(doneLoading());
    })
    .catch((err) => {
      dispatch({ type: REGISTER_FAILED });
      dispatch(error(err.message));
    });
};

export const loggingIn = (loginDetail) => (dispatch) => {
  const { username, password } = loginDetail;
  //   headers
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //   body
  const body = JSON.stringify({ username, password });
  dispatch(loading());

  axios
    .post("/api/auth/login", body, config)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
      dispatch(doneLoading());
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_fALIED,
      });
      dispatch(error(err.message));
    });
};

export const loadUser = () => (dispatch, getState) => {
  dispatch(loading());

  axios
    .get("/api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: USER_LOADED,
        payload: res.data,
      });
      dispatch(doneLoading());
    })
    .catch((err) => {
      dispatch(error(err.message));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

export const logout = () => (dispatch, getState) => {
  dispatch(loading());

  axios
    .post("/api/auth/logout", null, tokenConfig(getState))
    .then((res) => {
      dispatch({ type: LOGOUT_SUCCESS });
      dispatch(doneLoading());
    })
    .catch((err) => {
      dispatch(error(err.message));
    });
};

export const tokenConfig = (getState) => {
  //  get token from state
  const token = getState().Auth.token;
  // create header/
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //   addtoken to header for authorization if token exist
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
