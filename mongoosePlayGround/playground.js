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

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
});

const taskSchema = new Schema({
  description: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const User = mongoose.model("User", userSchema);
const Task = mongoose.model("Task", taskSchema);

const newUser = new User({
  name: "Paul",
  age: 26
});

const newTask = new Task({
  description: "Buy groceries",
  completed: false
});

newUser
  .save()
  .then(result => console.log(result))
  .catch(error => console.log(error));

newTask
  .save()
  .then(result => console.log(result))
  .catch(error => console.log(error));
