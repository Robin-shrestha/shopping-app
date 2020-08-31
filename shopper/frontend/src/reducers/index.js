import { createStore, combineReducers, applyMiddleware } from "redux";
import LoadingAndError from "./LoadingErrorReducer";
import ShelfItems from "./stockItemReducer";
import Auth from "./AuthReducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  LoadingAndError,
  ShelfItems,
  Auth,
});
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
