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

// const hoobies: string[] = ["sports", "coding"];
// const activeHoodies: string[] = ["hiking", ...hoobies];

// console.log(activeHoodies);

// type personProp = {
//   firstName: string;
//   age: number;
// };

// const person: personProp = {
//   firstName: "kyaw",
//   age: 18,
// };

// const copiedPersoonData: personProp = { ...person };

// console.log(copiedPersoonData);

// const add = (...numbers: number[]) => {
//   return numbers.reduce((curResult, curValue) => {
//     return curResult + curValue;
//   }, 0);
// };

// const addNumbers = add(4, 5, 6, 7, 8, 9, 34, 2, 4);
// console.log(addNumbers);

// // array desture
// const [hobby1, hobby2] = hoobies;
// //object desture
// const { firstName, age } = person;

class Department {
  name: string;

  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department :" + this.name);
  }
}

const accounting = new Department("Accounting");
accounting.describe();

const accountingCopied = { name: "DUMMY", describe: accounting.describe };

accountingCopied.describe();
