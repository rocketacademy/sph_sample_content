import { useEffect, useState } from "react";
import ShoppingForm from "./ShoppingForm";
import ShoppingDisplay from "./ShoppingDisplay";

const ShoppingPage = () => {
  /**
   * Component usecase
   * To display the current lists that are stored in state
   * To utilise the ShoppingDisplay and ShoppingFrom components
   *
   * Suggested Component States
   * lists - object where each key is a list and the value is an array of items
   * currentListName - the current key selected in lists
   * listSelected - the value of the current key selected from lists
   * showNewListForm - a boolean to showcase if we should see the newListForm or not
   * newListForm - the current value being captured in the newListForm input.
   *
   * Suggested Functionalities
   * It should contain a method to show or hide the newListForm, based off button clicks.
   * It should contain a method to add an empty list into the lists state with the key being the capatured name
   * It should contain an addItem method to add an item to the current list selected
   * It should contain a markAsBrought method to toggle the state of the currently selected item's markAsBrought value
   * It should contain a deleteItem method that will remove the currently selected item from its list
   * It should allow users to select the list they want to alter and view based which list they clicked on
   * It should pass key methods down into the child components such that they can fire off these methods and alter the list state
   */

  const [lists, setLists] = useState({
    sampleList: [{ item: "test 1", itemAmount: 5, itemPrice: 5 }],
  });
  const [listSelected, setListSelected] = useState(lists.sampleList);
  const [currentListName, setCurrentListName] = useState("sampleList");
  const [showNewListForm, setShowNewListForm] = useState(false);
  const [newListForm, setNewListForm] = useState("");

  const selectList = (list) => {
    setListSelected(lists[list]);
    setCurrentListName(`${list}`);
  };

  const newList = () => {
    setLists((prevState) => {
      return { ...prevState, [newListForm]: [] };
    });
    setShowNewListForm(!showNewListForm);
    setNewListForm("");
  };

  const addItem = (item) => {
    let itemToAdd = {
      item: item.item,
      itemAmount: item.itemAmount,
      itemPrice: item.itemPrice,
    };
    setListSelected((prevState) => {
      return [itemToAdd, ...prevState];
    });
  };

  useEffect(() => {
    setLists((prevState) => {
      return { ...prevState, [currentListName]: listSelected };
    });
  }, [listSelected, currentListName]);

  const deleteItem = (index) => {
    const alteredArray = [...listSelected];
    alteredArray.splice(index, 1);
    setListSelected(alteredArray);
  };

  const markAsBought = (index) => {
    const alteredArray = [...listSelected];
    alteredArray[index] = {
      ...alteredArray[index],
      markAsBought: !alteredArray[index].markAsBought,
    };
    setListSelected(alteredArray);
  };

  console.log(Object.entries(lists));

  const displayLists = () => {
    let display = [];
    for (const [key, value] of Object.entries(lists)) {
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
            name="newListForm"
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
          <ShoppingForm addItem={addItem} />
          <h2>{currentListName}</h2>

          <ShoppingDisplay
            list={listSelected}
            deleteItem={deleteItem}
            markAsBought={markAsBought}
          />
        </div>
      )}
    </>
  );
};

export default ShoppingPage;
