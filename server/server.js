const { egController } = require("./controllers/exampleController");
const { getToken } = require("./services/tokenService");

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

app.get("/token", async (req, res, next) => {
  var params = {
    clientId: "7402194203471b17852c9fea03cfca3c",
    clientSecret:
      "4cedd36c337c38e238867d669cdf2b8b4628fa078d88e344d2ab36a46480a92",
  };

  request(
    {
      method: "GET",
      url: "https://api.jdoodle.com/v1/auth-token",
      json: params,
    },
    function (error, response, body) {
      if (response.statusCode == 200) {
        console.log("Call");
        res.json(response.body);
      } else {
        res.json(error);
      }
    }
  );
});

app.post("/execute", async (req, res, next) => {
  console.log(req.body.script);
  console.log(req.body.stdin);

  var params = {
    clientId: "7402194203471b17852c9fea03cfca3c",
    clientSecret:
      "4cedd36c337c38e238867d669cdf2b8b4628fa078d88e344d2ab36a46480a92",
    script: req.body.script,
    stdin: req.body.stdin,
    language: "nodejs",
    versionIndex: 0,
    compileOnly: false,
  };

  request(
    {
      method: "POST",
      url: "https://api.jdoodle.com/v1/execute",
      json: params,
    },
    function (error, response, body) {
      if (response.statusCode == 200) {
        console.log("Execute");
        // console.log(response);
        res.json(response.body);
      } else {
        res.json(error);
      }
    }
  );
});
