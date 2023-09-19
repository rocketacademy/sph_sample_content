// ModuleOne.js

export const objectToShare = {
  x: 1,
  y: 2,
};

// ModuleTwo.js

// import { objectToShare } from "./ModuleOne";

console.log(objectToShare.x); // 1
console.log(objectToShare.y); // 2
