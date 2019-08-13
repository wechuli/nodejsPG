const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taskManager";
var db;

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }
    db = client.db(databaseName);
    db.collection("users")
      .findOne({ name: "Paul" })
      .then(result => console.log(result))
      .catch(error => console.log(error));

    db.collection("users")
      .findOne({ _id: new ObjectID("5d35d3ebe9debc3ba4a4fcdd") })
      .then(result => console.log(result))
      .catch(error => console.log(error));

    db.collection("users")
      .find({ age: 27 })
      .limit(2)
      .toArray()
      .then(result => console.log(result))
      .catch(error => console.log(error));

    db.collection("users")
      .find({})
      .count()
      .then(result => console.log(result))
      .catch(error => console.log(error));

    db.collection("task")
      .find({ completed: true })
      .toArray()
      .then(data => console.log(data))
      .catch(err => console.log(err));

    db.collection("task")
      .find({ completed: false })
      .toArray()
      .then(data => console.log(data))
      .catch(err => console.log(err));

    //   db.collection('task').aggregate([]).toArray()
  }
);
