import { createStore } from "redux";

const initState = {
  message: "Hello Redux",
  counter: 0,
  list: [],
};

function AppReducer(state = initState, action) {
  switch (action.type) {
    case "INC":
      return { ...state, counter: state.counter + 1 };
    case "DEC":
      return { ...state, counter: state.counter - 1 };

    case "POST_TWEET":
      const newList = [action.payLoad, ...state.list];
      return { ...state, list: newList };
    default:
      return state;
  }
}

// to create store, we need reducer
const store = createStore(AppReducer);
export { store };
