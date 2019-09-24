const Status = require("@models/Status");

const listStatus = [
  { type: "waiting active" },
  { type: "logout" },
  { type: "login" },
  { type: "block" }
];

Status.create(listStatus).catch(err => {});
