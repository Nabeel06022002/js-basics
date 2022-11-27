function square(x) {
  return x * x;
}

const cowsay = require("cowsay");

console.log(
  cowsay.say({
    text: "COWBOY",
    e: "oO",
    T: "U ",
  })
);

console.log("hello world");
console.log("1" + 1);
console.log(typeof true);

// undefined, null
// var, const, let -> Declare variables
const name = "Name"; //satys constant
let new_name; //variable which can change value
//A_n = "Okay";
console.log(typeof new_name);
const a = 10;
const b = 12;
if (a < b) {
  console.log("a is smaller");
} else {
  console.log("a is bigger");
}
//undefined/null -> false
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//array -> collection of different dtype objects
// dont use for loop in prod

// map -> executes a function one by one

// JSON = objects
const person_details = {
  name: "XYZ",
  surname: "C",
  age: 24,
  cartoons_liked: ["Power", "Yu-gi-oh"],
  schools: [
    {
      name: "KV",
      classes: "1-6",
    },
  ],
};

console.log(person_details.cartoons_liked[1]);

try {
  const a = 10;
  throw new Error("a is const");
} catch (err) {
  console.log("Error");
}
console.log(square(51));
// using var helps access a variable out of scope

//npm init => create a hodejs project
//npm i => install libraries
cartoon = ["power", 5];
console.log(cartoon[1]);
