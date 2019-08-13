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

    // delete one
    db.collection("users")
      .deleteOne({ name: "test" })
      .then(result => console.log(result))
      .catch(err => console.log(err));

    //deleteMany
    db.collection("users")
      .deleteMany({ age: { $lte: 21 } })
      .then(result => console.log(result))
      .catch(error => console.log(error));

    
  }
);
