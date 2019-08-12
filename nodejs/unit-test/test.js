const dotenv = require("dotenv");
dotenv.config();
const app = require("./server");
const assert = require("assert");
const superagent = require("superagent");

const PORT = process.env.PORT;
describe("server", () => {
  let server;

  beforeEach(() => {
    server = app().listen(PORT);
  });

  afterEach(() => {
    server.close();
  });

  it("I'm server", done => {
    superagent.get(`http://localhost:${PORT}`, (err, res) => {
      assert.ifError(err);
      assert.equal(res.status, 200);
      done();
    });
  });
});
