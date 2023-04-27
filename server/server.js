const { egController } = require("./controllers/exampleController");
const { exampleService } = require("./services/exampleService");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/", (req, res) => {
  const result = exampleService();
  res.send(result);
});
