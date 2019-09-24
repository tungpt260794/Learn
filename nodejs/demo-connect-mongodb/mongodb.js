// mongodb
const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");
// connection URL
const url = "mongodb://localhost:27017";
// database name
const dbName = "Blog";

const mongoConnect = action => {
  // use connect method to connect to the server
  MongoClient.connect(
    url,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err, client) => {
      assert.equal(null, err);
      console.log("Connected successfully to server");
      const db = client.db(dbName);

      action(db);

      client.close();
    }
  );
};

MongoClient.execute = mongoConnect;

module.exports = MongoClient;
