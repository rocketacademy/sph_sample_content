import bin from "../Images/bin.png";
import bought from "../Images/bought.png";
import notBought from "../Images/notbought.png";
import { useContext } from "react";
import { ShoppingListContext } from "../Provider/ShoppingListProvider";

const ShoppingItem = (props) => {
  /**
   * Component usecase
   * To showcase the individual ShoppingItem to the users
   *
   * Suggeted Contexts Retrieved
   * shoppingLists
   * shoppingsListDispatch
   *
   * Suggested Component States
   * N/A
   *
   * Suggested Functionalities
   * To display if the item is brought or not, do this through CSS properties
   * To use the markAsBought method to alter the state of the current item and the currently selected lists context (use index) by calling the dispatch and 'MARK' method, passing in the index and selected list
   * To use the deleteItem methods to remove the current item from the currently selected lists context (use index) by calling the dispatch and 'DELETE' method, passing in the index and selected list
   */

  // Grab the shoppingLists and shoppingListsDisptach from the context provider

  // Define the deleteItem method that dispatches the DELETE method to the reducer along with required information

  // Define the markAsBought method that dispatches the MARK method to the reducer along with required information

  return <>{/* Place rendered JSX / Components here */}</>;
};

export default ShoppingItem;
