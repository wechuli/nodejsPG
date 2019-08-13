const { Task, User } = require("./models");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/task-manager-api", {
    useCreateIndex: true,
    useNewUrlParser: true
  })
  .then(() => {
    console.info("Database successfully connected");
  })
  .catch(error => console.log(error));

const user = {
  name: "Nicole",
  age: 20,
  email: " Nicole@gmail.com ",
  password:"Iamdsd sdspastsword"
};
const task = {
  description: "Buy some computer RAM",
  completed: true
};

function createNewUser() {
  const newUser = new User(user);
  newUser
    .save()
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

function createNewTask() {
  const newTask = new Task(task);
  newTask
    .save()
    .then(result => console.log(result))
    .catch(error => console.log(error));
}

createNewUser();
// createNewTask();
