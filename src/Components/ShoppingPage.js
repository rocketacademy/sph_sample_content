import ShoppingForm from "./ShoppingForm";
import ShoppingDisplay from "./ShoppingDisplay";

import { useState, useContext } from "react";
import { ShoppingListContext } from "../Provider/ShoppingListProvider";

const ShoppingPage = () => {
  /**
   * Component usecase
   * To display the current lists that are stored in context
   * To utilise the ShoppingDisplay and ShoppingFrom components
   *
   * Suggeted Contexts Retrieved
   * showNewListForm - boolean to show or hide the form
   * newListForm - the name for the users new list
   *
   * Suggested Component States
   * showNewListForm - a boolean to showcase if we should see the newListForm or not
   * newListForm - the current value being captured in the newListForm input
   *
   * Suggested Functionalities
   * It should contain a method to show or hide the newListForm, based off button clicks
   * It should contain a method to add an empty list into the lists state with the key being the capatured name by calling the dispatch and 'NEW' method, passing in the new list name
   * It should allow users to select the list they want to alter and view based which list they clicked on, by calling the dispatch and 'SELECT' method passing in the name of the list
   */
  const {
    shoppingListsDispatch: dispatch,
    shoppingLists: shoppingListContext,
  } = useContext(ShoppingListContext);

  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newListForm, setNewListForm] = useState("");

  const selectList = (list) => {
    dispatch({
      type: "SELECT",
      payload: {
        selectedList: list,
      },
    });
  };

  const newList = () => {
    dispatch({
      type: "NEW",
      payload: {
        name: newListForm,
      },
    });
    setShowNewListForm(!showNewListForm);
    setNewListForm("");
  };

  const displayLists = () => {
    let display = [];
    for (const [key, value] of Object.entries(shoppingListContext.lists)) {
      display.push(
        <div onClick={() => selectList(key)} className="item">
          <h3>{key}</h3>
          <p>Number of Items: {value.length}</p>
        </div>
      );
    }
    return display;
  };

  return (
    <>
      {showNewListForm ? (
        <div className="form">
          <input
            type="text"
            name="item"
            value={newListForm}
            placeholder="New List"
            onChange={(e) => setNewListForm(e.target.value)}
          />
          <button onClick={newList}>Add List</button>
        </div>
      ) : (
        <div>
          <button onClick={() => setShowNewListForm(!showNewListForm)}>
            New List
          </button>
          <div className="flexCenter">{displayLists()}</div>
          <ShoppingForm />
          <h2>{shoppingListContext.selectedList}</h2>

          <ShoppingDisplay />
        </div>
      )}
    </>
  );
};

export default ShoppingPage;
