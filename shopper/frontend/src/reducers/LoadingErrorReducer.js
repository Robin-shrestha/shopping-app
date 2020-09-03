import { ON_ERROR, ON_LOADING, DONE_LOADING } from "../Constants";

const initialState = {
  loading: false,
  error: "",
};
const LoadingErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_LOADING:
      return { ...state, loading: true, error: "" };
    case DONE_LOADING:
      return { ...state, loading: false };
    case ON_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default LoadingErrorReducer;
