"use strict";
let user1;
user1 = {
    name: "Brian",
    age: 18,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hello I am");
