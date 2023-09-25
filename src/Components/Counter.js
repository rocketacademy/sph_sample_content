import { useState, useEffect } from "react";

const Counter = (props) => {
  /**
   * Component usecase
   * To explore component props
   * To explore component useState
   * To expore the differnt ways that you could alter component state
   *
   * Suggested Props
   * name - name to be displayed by the counter component
   * count - this value, if passed can dictate the initial state of this component
   *
   * Suggested Component State
   * count - The current count that will be displayed
   *
   * Suggested Functionalities
   * Create an '+' button that increments the count state when clicked
   * Create an '-' button that decrements the count state when clicked
   *
   */
  const [count, setCount] = useState(props.count || 0);

  return (
    <>
      <h1>{props.name ? props.name : "Stranger"}'s Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      {/**
       * Alternate ways to alter the count state on click
       *  <button onClick={() => setCount((prevState) => prevState + 1)}>+</button>
       *  <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
       */}
    </>
  );
};
export default Counter;
