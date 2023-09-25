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
   * It should contain a method to add an empty list into the lists state with the key being the captured name
   * It should contain an addItem method to add an item to the current list selected
   * It should contain a markAsBrought method to toggle the state of the currently selected item's markAsBrought value
   * It should contain a deleteItem method that will remove the currently selected item from its list
   * It should allow users to select the list they want to alter and view based which list they clicked on
   * It should pass key methods down into the child components such that they can fire off these methods and alter the list state
   */

  // Define all you state here

  // Define a function that will allow users to select a list and alter the currentListName and listSelected states

  // Define a function that will allow users to add a new list into the lists object

  // Define a function that will allow users to add a new item to the currently selected list

  // Define a function that will allow users to delete an item from the currently selected list

  // Define a function that will allow users to toggle whether or not an item has been bought

  // Define a useEffect function that checks the currentListName and listSelectedm update the lists accordingly

  return (
    <>
      {/* Place rendered JSX / Components here, use ShoppingForm and ShoppingDisplay */}
    </>
  );
};

export default ShoppingPage;
