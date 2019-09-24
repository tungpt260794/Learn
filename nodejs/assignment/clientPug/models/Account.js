const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: {
    type: String,
    unique: true,
    lowercase: true,
    required: true
  },
  password: { type: String, required: true },
  avatar: String,
  status: { type: mongoose.Schema.Types.ObjectId, ref: "Status" },
  type: { type: String, default: "customer" }
});

accountSchema.query.byUsername = function(username) {
  return this.where({ username });
};

const Account = mongoose.model("Account", accountSchema);

module.exports = Account;
