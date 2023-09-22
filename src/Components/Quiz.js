import Counter from "./Counter";
import Profile from "./Profile";

// const userArray = [
//   { name: "Bob", age: 21, profession: "Professional Ninja" },
//   { name: "Alice", age: 29, profession: "Legal Guardian" },
//   { name: "Carina", age: 22, profession: "Soux Chef" },
//   { name: "Dom", age: 24, profession: "Software Engineer" },
//   { name: "Eric", age: 30, profession: "English - Russian Translator " },
// ];

// userArray.map((element) => {
//   // access element here
// });

// const array1 = [1, 2, 3, 4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce((accumulator, currentValue) => {
//   console.log("CurrentValue", currentValue);
//   console.log("accumulator", accumulator);

//   return accumulator + currentValue;
// }, initialValue);

// console.log(sumWithInitial);
// // Expected output: 10

const information = {
  name: "Bob",
  age: 21,
  profession: "Legal Guardian",
};

function App() {
  return (
    <div>
      <Profile {...information} />
      <Counter Name="Sam" />
    </div>
  );
}

export default App;
