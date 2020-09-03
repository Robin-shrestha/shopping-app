import { GET_USER, ADD_TO_CART, REMOVE_FROM_CART } from "../Constants";
import { loading, doneLoading, error } from "./LoadingErrorActions";
import axios from "axios";
import { tokenConfig } from "./AuthActions";

export const getUser = () => (dispatch, getState) => {
  dispatch(loading());

  axios
    .get("api/auth/user", tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
      dispatch(doneLoading());
    })
    .catch((err) => {
      dispatch(error(err.message));
    });
};
//   items: [
//     {
//       product_id: null,
//       product_name: "",
//       qty: null,
//       price: null,
//       type: "",
//     },
//   ],
export const addToCart = (payload) => (dispatch) => {
  dispatch(loading());
  dispatch({
    type: ADD_TO_CART,
    payload,
  });
  dispatch(doneLoading());
};
