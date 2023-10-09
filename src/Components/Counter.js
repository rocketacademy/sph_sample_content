import { useState, useEffect } from "react";

const Counter = (props) => {
  const [count, setCount] = useState(props.count || 0);

  // useEffect slide
  // useEffect(() => {
  //   console.log("hello");
  //   setCount(1);
  // }, []);

  return (
    <>
      <h1>{props.name ? props.name : "Stranger"}'s Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/* 
// different method to alter state
//  <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
//  <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
      */}
    </>
  );
};
export default Counter;
