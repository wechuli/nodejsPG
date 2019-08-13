const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "taskManager";
var db;

const id = new ObjectID();

console.log(id);
console.log(id.id);
console.log(id.id.length);
console.log(id.toHexString());
console.log(id.toHexString().length);

console.log(id.getTimestamp());
MongoClient.co;
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
      .insertOne({
        _id: id,
        name: "Paul",
        age: 26
      })
      .then(result => {
        console.log(result.ops);
      })
      .catch(error => console.log(error));

    // db.collection('users').insertMany([{
    //     name: "Nicole",
    //     age: 20
    // }, {
    //     name: "Jane",
    //     age: 29
    // }, {
    //     name: "John",
    //     age: 17
    // }]).then(result => console.log(result.ops)).catch(error => console.log(error));

    // db.collection("task")
    //   .insertMany([
    //     {
    //       description: "This is a fake task",
    //       completed: true
    //     },
    //     {
    //       description: "This is another fake task",
    //       completed: false
    //     },
    //     {
    //       description: "This is a fake task3",
    //       completed: true
    //     }
    //   ])
    //   .then(result => console.log(result.ops))
    //   .catch(error => console.log(error));
  }
);
