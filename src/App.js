import "./App.css";
import ShoppingPage from "./Components/ShoppingPage";
import ShoppingListProvider from "./Provider/ShoppingListProvider";

function App() {
  return (
    <ShoppingListProvider>
      <div className="App">
        <header className="App-header">
          <ShoppingPage />
        </header>
      </div>
    </ShoppingListProvider>
  );
}

export default App;
