import React, { useReducer } from "react";

import { shoppingListReducer, initialState } from "../Reducer/ShoppingLists";

export const ShoppingListContext = React.createContext();

const ShoppingListProvider = ({ children }) => {
  const [shoppingLists, shopingListsDispatch] = useReducer(
    shoppingListReducer,
    initialState
  );

  return (
    <ShoppingListContext.Provider
      value={{ shopingListsDispatch, shoppingLists }}
    >
      {children}
    </ShoppingListContext.Provider>
  );
};

export default ShoppingListProvider;
