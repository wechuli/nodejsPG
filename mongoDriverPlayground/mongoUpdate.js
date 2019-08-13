const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taskManager";
var db;

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

    // set operator
    db.collection("users")
      .updateOne(
        { _id: ObjectID("5d35d338049ff446b832de9c") },
        { $set: { name: "Wechuli-updated" } }
      )
      .then(result => console.log(result))
      .catch(err => console.log(err));

    //   db.collection('task').aggregate([]).toArray()

    // inc operator
    db.collection("users")
      .updateOne(
        { _id: ObjectID("5d35d338049ff446b832de9c") },
        { $inc: { age: 1 } }
      )
      .then(result => console.log(result))
      .catch(err => console.log(err));

    db.collection("task")
      .updateMany({}, { $set: { completed: false } })
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }
);
