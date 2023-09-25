import ShoppingItem from "./ShoppingItem";

const ShoppingDisplay = (props) => {
  /**
   * Component usecase
   * To display the total cost of the items in the list
   * To display each item in the currently selected list, by utilising the ShoppingItem component
   * Pass the prop methods down to the ShoppingItem
   *
   * Suggeted Props
   * listSelected
   * markAsBought method
   * deleteItem method
   *
   * Suggested Component States
   * N/A
   *
   * Suggested Functionalities
   * If there are no items in a list, showcase an "add item to this list" message
   *
   */

  return (
    <div>
      <h3>
        Total:
        {props.list.length > 0
          ? props.list.reduce((acc, cv) => {
              return acc + cv.itemAmount * cv.itemPrice;
            }, 0)
          : " No items added"}{" "}
        $SGD
      </h3>
      <div className="flexCenter">
        {props.list.length > 0
          ? props.list.map((item, index) => {
              return (
                <div key={index}>
                  <ShoppingItem
                    index={index}
                    item={item}
                    deleteItem={props.deleteItem}
                    markAsBought={props.markAsBought}
                  />
                </div>
              );
            })
          : "Add an item please"}
      </div>
    </div>
  );
};

export default ShoppingDisplay;
