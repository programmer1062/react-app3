import { useSelector } from "react-redux";

export function AboutUs() {
  const state = useSelector((state) => state);
  // console.log(state);
  return (
    <div className="bg-danger " style={{ height: "100vh" }}>
      <h1>AboutUs</h1>
      <h2>{state.cr.counter}</h2>

      {state.tr.list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}
