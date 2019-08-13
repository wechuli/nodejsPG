global.setTimeout(() => {
  console.log("I was called after 2 seconds");
}, 2000);

// console.log("I will probably run immediately");

let myInterval = global.setInterval(() => {
  console.log("Executing a set interval");
}, 1000);

setTimeout(()=>{
    clearInterval(myInterval);
},)
console.log("I will probably run immediately");


