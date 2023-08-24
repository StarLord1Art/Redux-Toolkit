import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { mainReducer } from "./mainReducer";

const rootReducer = combineReducers({
  main: mainReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
