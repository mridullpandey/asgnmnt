const signUpController = require("../controllers/signUp.controller");
const stepsController = require("../controllers/steps.controller");
const {
  validateRequestBody,
  validateParams,
} = require("../middlewares/verification");
const router = require("express").Router();

router.post(
  "/ucanji/api/v1/signUp",
  validateRequestBody,
  signUpController.signUp
);
router.get(
  "/ucanji/api/v1/users/:phoneNumber/steps",
  validateParams,
  stepsController.steps
);
router.get("/dashboard", function (req, res) {
  res.send({
    status: "LoggedIn successfully",
    msg: "Redirected to dashboard page....",
  });
});

module.exports = router;
