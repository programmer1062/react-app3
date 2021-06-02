import { combineReducers } from "redux";
import { createStore } from "redux";

import { AppReducer } from "./reducers/AppReducer";

import { CounterReducer } from "./reducers/CounterReducer";
import { TweetReducer } from "./reducers/TweetReducer";

const rootReducer = combineReducers({
  cr: CounterReducer,
  tr: TweetReducer,
});

// to create store, we need reducer
// const store = createStore(AppReducer);
const store = createStore(rootReducer);
export { store };
