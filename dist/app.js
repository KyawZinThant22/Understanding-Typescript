"use strict";
// let name1 = "kyawzinthant";
// name1 =
//   "what is the meaning of life and how can we survive in this cruel world";
// const name2 = "kyawkyaw";
// // name2="mgmg"
// var namename = "kyaw";
// function gen() {
//   console.log("function", namename);
// }
// console.log(namename);
// gen();
// const add = (a: number, b: number = 5): number => a + b;
// const printOutPut: (a: number | string) => void = (outPut) =>
//   console.log(outPut);
// printOutPut(add(5));
const hoobies = ["sports", "coding"];
const activeHoodies = ["hiking", ...hoobies];
console.log(activeHoodies);
const person = {
    name: "kyaw",
    age: 18,
};
const copiedPersoonData = Object.assign({}, person);
console.log(copiedPersoonData);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addNumbers = add(4, 5, 6, 7, 8, 9, 34, 2, 4);
console.log(addNumbers);
//# sourceMappingURL=app.js.map