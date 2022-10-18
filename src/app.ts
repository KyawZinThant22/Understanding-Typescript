interface Person {
  name: string;
  age: number;
  greet(name: string): void;
}

let user1: Person;

user1 = {
  name: "Brian",
  age: 18,
  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hello I am");
