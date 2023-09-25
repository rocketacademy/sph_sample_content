// import React from "react";

var number = 10;

function arraySum() {
  const array = [1, 2, 3];
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    sum = sum + array[i];
  }

  return sum;
}

//Map

const superMarketMeat = ["chicken", "beef", "pork"];

const SUPERMARKETMEAT = superMarketMeat.map(function (element) {
  return element.toUpperCase();
});

const SUPERMARKETMEATARROW = superMarketMeat.map((element) =>
  element.toUpperCase()
);

console.log(SUPERMARKETMEAT); // [ 'CHICKEN', 'BEEF', 'PORK' ]

console.log(SUPERMARKETMEATARROW); // [ 'CHICKEN', 'BEEF', 'PORK' ]

// Filter

const superMarketProducts = [
  { type: "meat", name: "steak", price: 10 },
  { type: "meat", name: "chicken wings", price: 7 },
  { type: "fruit", name: "apple", price: 2 },
  { type: "vegetable", name: "broccoli", price: 3 },
  { type: "vegetable", name: "zucchini", price: 5 },
];

const superMarketMeatProducts = superMarketProducts.filter(
  (item) => item.type === "meat"
);

console.log(superMarketMeatProducts); // [  { type: 'meat', name: 'steak', price: 10 }, { type: 'meat', name: 'chicken wings', price: 7 } ]

const superMarketShoppingList = [
  { type: "meat", name: "steak", price: 10 },
  { type: "meat", name: "chicken wings", price: 7 },
  { type: "fruit", name: "apple", price: 2 },
  { type: "vegetable", name: "broccoli", price: 3 },
  { type: "vegetable", name: "zucchini", price: 5 },
];

const totalPrice = superMarketShoppingList.reduce((acc, cv) => {
  return acc + cv.price;
}, 0);

console.log(totalPrice); // 27

// Arrow functions - map

const colours = ["Yellow", "Indigo", "Hot Pink", "Crimson"];

const lettersInColoursArrow = colours.map((colour) => colour.length);

const lettersInColours = colours.map(function (colour) {
  return colour.length;
});

console.log(lettersInColoursArrow); // [ 6, 6, 8, 7 ]
console.log(lettersInColours); // [ 6, 6, 8, 7 ]

let request;

// const { email, password, userId } = request.body;

const [first, second, ...rest] = [
  "Buy present",
  "Buy Groceries",
  "Sell Bike",
  "Build model",
  "Do puzzle",
];

console.log(first);
console.log(second);
console.log(rest);

// Buy present
// Buy Groceries

// [ 'Sell Bike', 'Build model', 'Do puzzle' ]

// export const jsxElement = (
//   <div>
//     <p>Hello World</p>
//   </div>
// );

// export const jsxElementCreateElement = React.createElement(
//   "p",
//   { className: "" },
//   "Hello World"
// );
