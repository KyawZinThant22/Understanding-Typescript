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
    constructor(name, id) {
        this.name = name;
        this.id = id;
        // private name: string;
        this.employess = [];
    }
    describe() {
        console.log(`Department ${this.id} : ${this.name}`);
    }
    addNewEmployes(employess) {
        this.employess.push(employess);
    }
    printAllEmployesInformation() {
        console.log(this.employess.length);
        console.log(this.employess);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super("IT", id);
        this.admins = admins;
    }
}
const It = new ITDepartment("d1", ["Brian"]);
It.describe();
It.addNewEmployes("kyaw");
It.addNewEmployes("brian");
It.printAllEmployesInformation();
class AccountingDepartment extends Department {
    constructor(id, reports) {
        super("Accounting", id);
        this.reports = reports;
    }
    addReports(text) {
        this.reports.push(text);
    }
    printReports() {
        console.log(this.reports);
    }
    howManyReport() {
        console.log(this.reports.length);
    }
    describe() {
        console.log(`${this.name} has ${this.reports.length < 0 ? 0 : this.reports.length} reports ${this.reports.length > 0 ? `and they are ${this.reports} ` : ""}`);
    }
    addNewEmployes(name) {
        if (name === "brian") {
            return;
        }
        this.employess.push(name);
    }
}
const AccountDep = new AccountingDepartment("d2", []);
AccountDep.addReports("Jack sports Ui done");
AccountDep.addReports("App studio Ecommence Ui done");
AccountDep.describe();
AccountDep.addNewEmployes("Max");
AccountDep.addNewEmployes("brian");
AccountDep.printAllEmployesInformation();
