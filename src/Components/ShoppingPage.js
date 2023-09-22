import { useEffect, useState, useContext } from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingDisplay from "./ShoppingDisplay";
import { ShoppingListContext } from "../Provider/ShoppingListProvider";

const ShoppingPage = (props) => {
  const { shopingListsDispatch: dispatch, shoppingLists: shoppingListContext } =
    useContext(ShoppingListContext);

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
        <div onClick={() => selectList(key)}>
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
          <label>Item</label>
          <br />
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
