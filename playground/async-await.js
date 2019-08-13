const doWork = async () => {
  let cond = true;
  if (cond) {
    return "Wechuli";
  }
};

doWork()
  .then(value => console.log(value))
  .catch(error => console.log(error));


