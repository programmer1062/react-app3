import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export function Home() {
  // const [tinput, setTinput] = useState("");
  // const updateTinput = (e) => setTinput(e.target.value);

  // const [list, setList] = useState([]);
  /*const postTweet = () => {
    setList([tinput, ...list]);
    setTinput("");
  };
  */

  const [tinput, setTinput] = useState("");

  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const updateTinput = (e) => setTinput(e.target.value);
  const postTweet = () => {
    dispatch({ type: "POST_TWEET", payLoad: tinput });
    setTinput("");
  };

  return (
    <div>
      {/** CAPTURE INPUT HERE  */}
      <div className="d-flex mt-2 mx-4">
        <input
          className="form-control w-75"
          type="text"
          value={tinput}
          onChange={(e) => updateTinput(e)}
          placeholder="tweer here"
        />
        <input
          type="button"
          onClick={() => postTweet()}
          className="w-25 btn btn-secondary"
          value="Tweet"
        />
      </div>

      {/** DISPLAY TWEET HERE */}
      <div className="mx-4 mt-4">
        {state.list.map((item, index) => (
          <h4 key={index} className="text-secondary">
            {item}
          </h4>
        ))}
      </div>
    </div>
  );
}
