import { useState } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.count || 0);
  return (
    <>
      <h1>{props.name ? props.name : "Strangers"}'s Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </>
  );
};

export default Counter;

//  <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
//       <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
