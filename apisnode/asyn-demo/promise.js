const p = new Promise((resolve, reject) => {
  //Kick off some async work

  setTimeout(() => {
    // resolve(1);
    reject(new Error("Fake error"));
  }, 2000);
});

p.then(data => console.log(data)).catch(error => console.log(error.message));
