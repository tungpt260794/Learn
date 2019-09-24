const mongoose = require("mongoose");

// Build the connection tring
const dbURI = "mongodb://localhost:27017/Blog";

// Create the database connection
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on("connected", () => {
  console.log(`Mongoose default connection open to ${dbURI}`);
});

//  If the connection throws an error
mongoose.connection.on("error", err => {
  console.log(`Mongoose default connection error: ${err}`);
});

// When the connection is disconnected
mongoose.connection.on("disconnected", () => {
  console.log("Mongoose default connection disconnected");
});

// If the Node process ends, close the Mongoose connection
process.on("SIGINT", () => {
  console.log(
    "Mongoose default connection disconnected through app termination"
  );
  process.exit(0);
});
