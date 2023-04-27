const service = require("../services/egService");

exports.get_example = (req, res, next) => {
  // Add your controller logic here
  service.exampleService;
  res.send("Example response from the controller");
};
