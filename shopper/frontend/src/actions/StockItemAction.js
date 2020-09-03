import { FETCH_ITEMS } from "../Constants";
import { loading, doneLoading, error } from "./LoadingErrorActions";
import axios from "axios";

export const FetchShelfItem = () => (dispatch) => {
  dispatch(loading());
  axios
    .get("/api/saleitems")
    .then((res) => {
      dispatch({
        type: FETCH_ITEMS,
        payload: res.data,
      });
      // dispatch(addToShelf(res.data));
      dispatch(doneLoading());
    })
    .catch((err) => {
      dispatch(error(err.message));
      dispatch(doneLoading);
    });
};
