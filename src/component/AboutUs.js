import { useSelector } from "react-redux";

export function AboutUs() {
  const state = useSelector((state) => state);
  // console.log(state);
  return (
    <div className="bg-danger " style={{ height: "100vh" }}>
      <h1>AboutUs</h1>
      <h2>{state.message}</h2>
      <h2>{state.counter}</h2>

      {state.list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
