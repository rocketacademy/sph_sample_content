import bin from "../Images/bin.png";
import bought from "../Images/bought.png";
import notBought from "../Images/notbought.png";

const ShoppingItem = (props) => {
  /**
   * Component usecase
   * To showcase the individual ShoppingItem to the users
   *
   * Suggeted Props
   * index
   * item
   * markAsBought method
   * deleteItem method
   *
   * Suggested Component States
   * N/A
   *
   * Suggested Functionalities
   * To display if the item is brought or not, do this through CSS properties
   * To use the markAsBought method to alter the state of the current item and list (use index)
   * To use the deleteItem methods to remove the current item from the currently selected list (use index)
   */
  return (
    <div
      className={`item ` + (props.item.markAsBought ? "bought" : "notBought")}
    >
      <h3>Item: {props.item.item} </h3>
      <p>
        Amount: {props.item.itemAmount} - Price: $SGD {props.item.itemPrice}
      </p>
      <button onClick={() => props.markAsBought(props.index)}>
        {props.item.markAsBought ? (
          <img className="icon" src={notBought} alt="Mark as bought" />
        ) : (
          <img className="icon" src={bought} alt="Mark as not bought" />
        )}
      </button>
      <button onClick={() => props.deleteItem(props.index)}>
        <img className="icon" src={bin} alt="Delete Item" />
      </button>
    </div>
  );
};

export default ShoppingItem;
