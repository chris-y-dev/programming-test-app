const executeController = require("./controllers/executeController");
const tokenController = require("./controllers/tokenController");
const creditController = require("./controllers/creditController");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const axios = require("axios");
const request = require("request");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

app.get("/token", tokenController.get_token);

app.post("/execute", executeController.post_script_execute);

app.get("/credits", creditController.get_credits);
