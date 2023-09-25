import React, { useReducer } from "react";
import { shoppingListReducer, initialState } from "../Reducer/ShoppingLists";
export const ShoppingListContext = React.createContext();

const ShoppingListProvider = ({ children }) => {
  /**
   * Component usecase
   * To provide the reducer initial state to the context
   * All children will have access to that initial state and can alter it through dispatch actions
   *
   * Suggested Functionalities
   * Implement useReducer to extract the shoppingLists and dispatcher
   * Pass them as values into the ShoppingListContext Provider
   *
   */

  const [shoppingLists, shoppingListsDispatch] = useReducer(
    shoppingListReducer,
    initialState
  );

  return (
    <ShoppingListContext.Provider
    // Finish setting up the provider
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListProvider;
