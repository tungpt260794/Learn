const dotenv = require("dotenv");
dotenv.config();
const app = require("./server");
const PORT = process.env.PORT;
const server = app().listen(PORT);

console.log(`server running port ${PORT} ...`);