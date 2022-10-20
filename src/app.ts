// intersection types mean combiming types

interface Admin {
  name: string;
  privileage: string[];
}

interface Employe {
  name: string;
  startDate: Date;
}

interface CombinedTypes extends Admin, Employe {}

type CombinationofTypes = Admin & Employe;

const brian: CombinedTypes = {
  name: "kyaw zin thant",
  privileage: ["server", "accept"],
  startDate: new Date(),
};

type Combinale = string | number;
type Numeric = boolean | number;

type UnknownType = Admin | Employe;

function printEmployeInformation(emp: UnknownType) {
  console.log("Name ", emp.name);
  if ("privileage" in emp) {
    console.log("privileage ", emp.privileage);
  }
  if ("startDate" in emp) {
    console.log("Start Date ", emp.startDate);
  }
}

printEmployeInformation(brian);

// Discrimated Unions
interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
  }
  console.log("Rnuung Speed is ", speed);
}

let SarKalay: Bird = {
  type: "bird",
  flyingSpeed: 100,
};

moveAnimal(SarKalay);

// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input")! as HTMLInputElement;

userInput.value = "hello";
