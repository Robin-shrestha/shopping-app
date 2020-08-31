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

  axios
    .post("/api/auth/register", body, config)
    .then((res) => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log(err.message);
    });
};
