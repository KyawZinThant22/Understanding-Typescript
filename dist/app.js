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
