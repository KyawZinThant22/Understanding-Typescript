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

const add = (a: number, b: number): number => a + b;

const printOutPut: (a: number | string) => void = (outPut) =>
  console.log(outPut);

printOutPut(add(5, 7));
