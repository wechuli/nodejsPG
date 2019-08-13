const p2 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async Operation 2 ..");
    resolve(2);
  }, 2000);
});

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Async Operation 1 ..");
//     reject(new Error("Something failed teribly"));
//   }, 2000);
// });

const p1 = new Promise(resolve => {
  setTimeout(() => {
    console.log("Async Operation 1 ..");
    resolve(2);
  }, 2000);
});

const playwithAsync = async function() {
  try {
    const result1 = await p2;
    const result2 = await p1;

    console.log(result1);
    console.log(result2);
  } catch (error) {
    console.log(error);
  }
};

playwithAsync();
