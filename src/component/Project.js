import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementAction, incrementAction } from "../redux/actions/AppActions";

export function Project() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const increment = () => {
    dispatch(incrementAction());
  };
  const decrement = () => {
    dispatch(decrementAction());
  };
  // const [counter, setCounter] = useState(0);

  // const increment = () => setCounter(counter + 1);

  return (
    <div className="mx-4">
      <div className="alert alert-info mt-2 text-center">
        COUNTER {state.cr.counter}
      </div>

      <input
        className="btn btn-secondary btn-lg w-100"
        type="button"
        onClick={() => increment()}
        value="INCREMENT"
      />
      <input
        className="btn btn-secondary mt-1 btn-lg w-100"
        type="button"
        onClick={() => decrement()}
        value="DECREMENT"
      />
    </div>
  );
}
