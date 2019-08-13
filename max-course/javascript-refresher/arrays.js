const hobbies = ["sports", "cooking", "running", "football"];

//for (let i = 0; i < hobbies.length; i++) {
// console.log(hobbies[i]);
//}

for (let hobby in hobbies) {
  console.log(hobbies[hobby]);
}

console.log(
  hobbies.map(hobby => {
    return `Hobby: ${hobby}`;
  })
);
console.log(hobbies);

//Object and arrays are reference types, we can edit the array or object even id we define it as a const

hobbies.push('Movies');
console.log(hobbies);
