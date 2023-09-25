import logo from "./logo.svg";
import "./App.css";
import BoilerPlate from "./Components/BoilerPlate";
import Counter from "./Components/Counter";
import Clock from "./Components/Clock";
import { useState } from "react";

function App() {
  const [showClock, setShowClock] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <BoilerPlate />

        <button onClick={() => setShowClock(!showClock)}>Toggle Clock</button>
        {showClock ? <Clock /> : null}

        <Counter name="Sam" />
        <Counter name="Bill" count={10} />
      </header>
    </div>
  );
}

export default App;
