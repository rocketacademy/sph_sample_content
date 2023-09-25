import { ADD, MARK, DELETE, NEW, SELECT } from "./ShoppingItemActionTypes";

/**
 * Component usecase
 * To develop the initial state that will be used within our reducer / context
 * To develop the reducer such that users can alter the state using dispatched methods
 * Handle the state and props of all components from a single place and file
 *
 * Suggested Initial State
 *  {
 *  lists: {
 *    sampleList: [
 *  { item: "test 1", itemAmount: 5, itemPrice: 5, markAsBought: false},
 *  { item: "test 2", itemAmount: 3, itemPrice: 10, markAsBought: false}
 *    ]
 *  },
 *  selectedList: 'sampleList',
 * }
 *
 * Suggested Functionalities
 * The shoppingListReducer should contain a switch case that allows us to alter the current state of the list
 * When moving from a stateful component that uses props to one that uses context and reducer, move all saved state logic into the reducer.
 * Handle SELECT, alter the selected list in reducer/ context state
 * Handle NEW, add new key to the lists object, its value is an empty array
 * Handle ADD, add a new item into the currently selected shopping list's array
 * handle MARK, alter the currently selected item, to toggle the value of markAsBought
 * handle DELETE, delete the currently selected item from the currently selected list
 */

export const initialState = {
  lists: {
    sampleList: [
      { item: "test 1", itemAmount: 5, itemPrice: 5, markAsBought: false },
      { item: "test 2", itemAmount: 10, itemPrice: 2, markAsBought: false },
    ],
  },
  selectedList: "sampleList",
};

export function shoppingListReducer(state, action) {
  switch (action.type) {
    case SELECT:
      return {
        ...state,
        selectedList: action.payload.selectedList,
      };
    case NEW:
      return {
        ...state,
        lists: { ...state.lists, [action.payload.name]: [] },
      };
    case ADD:
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.selectedList]: [
            action.payload.item,
            ...state.lists[`${action.payload.selectedList}`],
          ],
        },
      };
    case MARK: {
      const updatedItem = {
        ...state.lists[action.payload.selectedList][action.payload.index],
      };
      updatedItem.markAsBought =
        !state.lists[action.payload.selectedList][action.payload.index]
          .markAsBought;
      const updatedList = [...state.lists[action.payload.selectedList]];
      updatedList[action.payload.index] = updatedItem;

      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.selectedList]: [...updatedList],
        },
      };
    }
    case DELETE: {
      const alteredArray = state.lists[action.payload.selectedList];
      alteredArray.splice(action.payload.index, 1);
      return {
        ...state,
        lists: {
          ...state.lists,
          [action.payload.selectedList]: alteredArray,
        },
      };
    }
    default:
      return state;
  }
}
