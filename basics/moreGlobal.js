console.log(`The current directory am in is ${__dirname}`);
console.log(`The file name is ${__filename}`);

console.log(`My architecture is ${process.arch}`);

const cpuUsage = process.cpuUsage();

console.log(
  `My CPU usage is for user is ${cpuUsage.user} and system is ${
    cpuUsage.system
  }`
);

const envVariables = process.env;

console.log(`My environment variables is ${envVariables}`, process.env);
console.log(`My platform is ${process.platform}`);
console.log(`My uptime is ${process.uptime()}`);
