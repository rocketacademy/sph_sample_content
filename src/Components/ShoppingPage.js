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

  // Grab the shoppingLists and shoppingListsDisptach from the context provider

  // Define the required states here

  // Define the selectList method that dispatches the SELECT method to the reducer along with required information

  // Define the newList method that dispatches the NEW method to the reducer along with required information and toggles the new list form

  return (
    <>
      {/* Place rendered JSX / Components here, ShoppingForm, ShoppingDisplay */}
    </>
  );
};

export default ShoppingPage;
