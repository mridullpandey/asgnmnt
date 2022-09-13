const User = require("../models/user.model");
const validateRequestBody = async (req, res, next) => {
  if (!req.body.phoneNumber) {
    return res.status(400).send({
      message: "Failed! phoneNumber is required.",
    });
  }
  next();
};
const validateParams = async (req, res, next) => {
  if (!req.params.phoneNumber) {
    return res.status(400).send({
      message: "Failed! phoneNumber is required.",
    });
  }
  next();
};

module.exports = { validateRequestBody, validateParams };
