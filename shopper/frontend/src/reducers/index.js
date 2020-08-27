import { createStore, combineReducers, applyMiddleware } from "redux";
import LoadingErrorReducer from "./LoadingErrorReducer";
import ShelfItemReducer from "./stockItemReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  LoadingAndError: LoadingErrorReducer,
  ShelfItems: ShelfItemReducer,
});
const middlewares = [thunk];

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
