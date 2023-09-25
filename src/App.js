import "./App.css";
import ShoppingPage from "./Components/ShoppingPage";
import ShoppingListProvider from "./Provider/ShoppingListProvider";

function App() {
  /**
   * Component usecase
   * To Display the ShoppingPage component.
   *
   * Suggeted Props
   * N/A
   *
   * Suggested Component States
   * N/A
   *
   * Suggested Functionalities
   * N/A
   *
   */
  return (
    <ShoppingListProvider>
      <div className="App">
        <header className="App-header">
          {/* Display the ShoppingPage component */}
        </header>
      </div>
    </ShoppingListProvider>
  );
}

export default App;
