import logo from "./logo.svg";
import "./App.css";
import BoilerPlate from "./Components/BoilerPlate";
import Counter from "./Components/Counter";
import Clock from "./Components/Clock";
import { useState } from "react";

function App() {
  /**
   * Component usecase
   * To showcase how you can utilise components
   * To show the render the Counter and or Clock components on the page
   * To explore component props and pass props down into components
   * To explore component useState and how we can use it to toggle displays
   *
   * Suggested Props
   * N/A
   *
   * Suggested Component State
   * showClock - Show or hide the clock dependent on this boolean state
   *
   * Suggested Functionalities
   * Create an '+' button that increments the count state when clicked
   * Create an '-' button that decrements the count state when clicked
   *
   */

  // Define your state here
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Place rendered JSX / Components here */}
      </header>
    </div>
  );
}

export default App;
