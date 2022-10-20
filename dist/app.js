"use strict";
// intersection types mean combiming types
const brian = {
    name: "kyaw zin thant",
    privileage: ["server", "accept"],
    startDate: new Date(),
};
function printEmployeInformation(emp) {
    console.log("Name ", emp.name);
    if ("privileage" in emp) {
        console.log("privileage ", emp.privileage);
    }
    if ("startDate" in emp) {
        console.log("Start Date ", emp.startDate);
    }
}
printEmployeInformation(brian);
function moveAnimal(animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
    }
    console.log("Rnuung Speed is ", speed);
}
let SarKalay = {
    type: "bird",
    flyingSpeed: 100,
};
moveAnimal(SarKalay);
// const userInput = <HTMLInputElement>document.getElementById("user-input")!;
const userInput = document.getElementById("user-input");
userInput.value = "hello";
