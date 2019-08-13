const os = require("os");

const totalMem = os.totalmem();
const freeMemory = os.freemem();

console.log(`Total Memory: ${totalMem}`);
console.log(`Free Memory: ${freeMemory}`);
