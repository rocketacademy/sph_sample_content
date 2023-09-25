import { useState } from "react";
import cart from "../Images/cart.webp";

const ShoppingForm = (props) => {
  /**
   * Component usecase
   * To capture user input such that new items can be added into the currently selected list
   *
   * Suggeted Props
   * addItem method
   *
   * Suggested Component States
   * item - the name of the item
   * itemAmount - how many of these items does the user want to purchace
   * itemPrice - the price of that item
   *
   * Suggested Functionalities
   * To add the item to the currently selected lists state, by calling the props.addItem method
   * To reset the form to initial values once an item has been added
   * To show the current values within the inputs so the user knows what they are going to add
   * Capture the items name, the amount of items to buy and the price of each item
   */

  const [formInformation, setFormInformation] = useState({
    item: "",
    itemAmount: 0,
    itemPrice: 0,
  });

  const handleUpdate = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormInformation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const setListItem = () => {
    let itemToAdd = {
      ...formInformation,
      bought: false,
    };
    props.addItem(itemToAdd);

    setFormInformation({ item: "", itemAmount: 0, itemPrice: 0 });
  };

  return (
    <>
      <div className="flexCenter item">
        <div className="form">
          <label>Item</label>
          <br />
          <input
            type="text"
            name="item"
            value={formInformation.item}
            placeholder="Item to Add"
            onChange={handleUpdate}
          />
        </div>
        <div className="form">
          <label>Amount</label>
          <br />
          <input
            type="number"
            name="itemAmount"
            value={formInformation.itemAmount}
            onChange={handleUpdate}
          />
        </div>
        <div className="form">
          <label>Price</label>
          <br />
          <input
            type="number"
            name="itemPrice"
            value={formInformation.itemPrice}
            onChange={handleUpdate}
          />
        </div>
        <div className="form formButton">
          <button onClick={setListItem}>
            <img className="icon" src={cart} alt="Add Item" />
          </button>
        </div>
      </div>
    </>
  );
};

export default ShoppingForm;
