//Destructuring

//object destructuring

const person = {
  name: "Paul",
  age: 25,
  greet() {
    console.log(`Hi, I am ${this.name} `);
  }
};
//without destructing
/* const printName = (personData)=>{
      console.log(personData.name);
  }

  printName(person); */
//with destructuing

const printName = ({ name, age }) => {
  console.log(name, age);
};

printName(person);

const { name, age } = person;
console.log(name, age);

//Destructuring arrays

const hobbies = ["sports", "cooking", "running", "football"];
const [hobby1, hobby2] = hobbies;

console.log(hobby1,hobby2);
