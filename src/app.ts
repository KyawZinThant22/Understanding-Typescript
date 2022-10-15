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

const hoobies: string[] = ["sports", "coding"];
const activeHoodies: string[] = ["hiking", ...hoobies];

console.log(activeHoodies);

type personProp = {
  name: string;
  age: number;
};

const person: personProp = {
  name: "kyaw",
  age: 18,
};

const copiedPersoonData: personProp = { ...person };

console.log(copiedPersoonData);
