"use strict";
let user1;
let user2;
user1 = {
    name: "Brian",
    age: 18,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
};
user1.greet("Hello I am");
user2 = {
    name: "Chrollo Zoldyck",
    age: 18,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    },
    nickName: "kyawzinthant",
};
