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
  const {
    shoppingListsDispatch: dispatch,
    shoppingLists: shoppingListContext,
  } = useContext(ShoppingListContext);

  const deleteItem = (index) => {
    dispatch({
      type: "DELETE",
      payload: {
        selectedList: shoppingListContext.selectedList,
        index: index,
      },
    });
  };

  const markAsBought = (index) => {
    dispatch({
      type: "MARK",
      payload: {
        selectedList: shoppingListContext.selectedList,
        index: index,
      },
    });
  };

  return (
    <div
      className={`item ` + (props.item.markAsBought ? "bought" : "notBought")}
    >
      <h3>Item: {props.item.item} </h3>
      <p>
        Amount: {props.item.itemAmount} - Price: $SGD {props.item.itemPrice}
      </p>
      <button onClick={() => markAsBought(props.index)}>
        {props.item.markAsBought ? (
          <img className="icon" src={notBought} alt="Mark as bought" />
        ) : (
          <img className="icon" src={bought} alt="Mark as not bought" />
        )}
      </button>
      <button onClick={() => deleteItem(props.index)}>
        <img className="icon" src={bin} alt="Delete Item" />
      </button>
    </div>
  );
};

export default ShoppingItem;
