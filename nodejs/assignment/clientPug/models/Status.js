const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const statusSchema = new Schema({
  type: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  description: {
    type: String,
    lowercase: true
  }
});

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;
