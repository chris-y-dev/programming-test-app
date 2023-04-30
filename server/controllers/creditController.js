const request = require("request");

exports.get_credits = async (req, res, next) => {
  var params = {
    clientId: "7402194203471b17852c9fea03cfca3c",
    clientSecret:
      "4cedd36c337c38e238867d669cdf2b8b4628fa078d88e344d2ab36a46480a92",
  };

  request(
    {
      method: "GET",
      url: "https://api.jdoodle.com/v1/credit-spent",
      json: params,
    },
    function (error, response, body) {
      if (response.statusCode == 200) {
        console.log(response.body);
        res.json(response.body);
      } else {
        res.json(error);
      }
    }
  );
};
