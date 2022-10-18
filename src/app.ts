interface Person {
  name: string;
  age: number;
  greet(name: string): void;
}

interface Person2 extends Person {
  nickName: string;
}

let user1: Person;
let user2: Person2;

user1 = {
  name: "Brian",
  age: 18,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello I am");

user2 = {
  name: "Chrollo Zoldyck",
  age: 18,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
  nickName: "kyawzinthant",
};
