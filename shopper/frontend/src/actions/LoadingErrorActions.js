import { ON_ERROR, ON_LOADING, DONE_LOADING } from "../Constants";

export const loading = () => {
  return {
    type: ON_LOADING,
  };
};

export const doneLoading = () => {
  return {
    type: DONE_LOADING,
  };
};

export const error = (errMessage) => {
  return {
    type: ON_ERROR,
    payload: errMessage,
  };
};
