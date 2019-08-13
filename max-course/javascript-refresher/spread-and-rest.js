//Spread operator
const hobbies = ["sports", "cooking", "running", "football"];

//const copiedArray = hobbies.slice();
//console.log(copiedArray);

const copiedArray = [...hobbies];
console.log(copiedArray);

const objecttocopy = {
  name: "Paul",
  age: 25,
  greet() {
    console.log(`Hi, I am ${this.name} `);
  }
};
const copiedObject = { ...objecttocopy };
console.log(copiedObject);

//Rest Operator

const toArray = (...args) => {
  return args;
};

console.log(toArray(1,2,3,56));