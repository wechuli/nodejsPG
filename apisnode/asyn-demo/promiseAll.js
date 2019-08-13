const p2 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async Operation 2 ..");
    resolve(2);
  }, 2000);
});

const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async Operation 1 ..");
    resolve(2);
  }, 2000);
});

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Operation 1 ..");
//     reject(new Error("Something failed teribly"));
//   }, 2000);
// });

Promise.all([p1, p2])
  .then(result => console.log(result)) //the result is available as an array
  .catch(err => console.log(err));

Promise.race([p1, p2]) //the promise is resolved as soon as the first promise resolves
  .then(result => console.log(result)) //the result is available as an array
  .catch(err => console.log(err));
