import { useState, useContext } from "react";
import cart from "../Images/cart.webp";
import { ShoppingListContext } from "../Provider/ShoppingListProvider";

const ShoppingForm = (props) => {
  /**
   * Component usecase
   * To capture user input such that new items can be added into the selectedList in context
   *
   * Suggeted Contexts Retrieved
   * shoppingLists
   * shoppingsListDispatch
   *
   * Suggested Component States
   * item - the name of the item
   * itemAmount - how many of these items does the user want to purchace
   * itemPrice - the price of that item
   *
   * Suggested Functionalities
   * To add the item to the currently selected lists context, by calling the dispatch and 'ADD' method, passing in the itemToAdd and selected list
   * To reset the form to initial values once an item has been added
   * To show the current values within the inputs so the user knows what they are going to add
   * Capture the items name, the amount of items to buy and the price of each item
   */

  // Grab the shoppingLists and shoppingListsDisptach from the context provider

  // Define states here

  // Define state update hanlder function (s) here

  // Define a setListItem method that dispatches the ADD method to the reducer along with required informationmethod and resets the state of the form

  return <>{/* Place rendered JSX / Components here */}</>;
};

export default ShoppingForm;
