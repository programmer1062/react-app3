import { DEC, INC, POST_TWEET } from "../actions/AppActionType";

const initState = {
  message: "Hello Redux",
  counter: 0,
  list: [],
};

export function AppReducer(state = initState, action) {
  switch (action.type) {
    case INC:
      return { ...state, counter: state.counter + 1 };
    case DEC:
      return { ...state, counter: state.counter - 1 };

    case POST_TWEET:
      const newList = [action.payLoad, ...state.list];
      return { ...state, list: newList };
    default:
      return state;
  }
}
