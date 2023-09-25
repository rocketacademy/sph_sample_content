import { useState, useEffect } from "react";

export default function Clock() {
  /**
   * Component usecase
   * To explore the useEffect hook and understand how to control component life cycles with useEffect
   * Explore componentDidMount
   * Explore componentDidUpdate
   * Explore componentWillUnmount
   *
   * Suggested Component State
   * time - The current time in your current location
   *
   * Suggested Functionalities
   * Create a tick function that will run every second
   * The tick function should update the time state to the correct updated value
   */
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    console.log("I run once when mounting");
  }, []);

  useEffect(() => {
    console.log("I run when the component is updated.");
  });

  const tick = () => {
    setTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    console.log("I run when the component is mounted");

    const clock = setInterval(() => {
      tick();
    }, 1000);

    return () => {
      console.log("I run when the component is unmounted");
      clearInterval(clock);
    };
  }, []);

  useEffect(() => {
    console.log(time);
    console.log("I run when the time state is updated.");
  }, [time]);

  return (
    <>
      <h1>The time is: {time}</h1>
    </>
  );
}
