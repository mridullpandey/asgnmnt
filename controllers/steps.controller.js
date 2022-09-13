const User = require("../models/user.model");
const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8081 });

wss.on("connection", function connection(ws) {
  ws.on("message", function incoming(message) {
    data = JSON.parse(message);
    if (
      data.newSteps == undefined ||
      data.newSteps == null ||
      data.newSteps == ""
    ) {
      ws.send("invalid");
    } else if (
      data.phoneNumber == undefined ||
      data.phoneNumber == null ||
      data.phoneNumber == ""
    ) {
      ws.send("invalid");
    } else {
      // console.log(data.newSteps);
      User.findOne({ phoneNumber: data.phoneNumber }).exec(function (
        err,
        result
      ) {
        // console.log(result);
        if (result) {
          console.log(result);
          result.stepCount =
            parseInt(result.stepCount) + parseInt(data.newSteps);
          result.save();
          ws.send("success");
        } else {
          User.create({
            phoneNumber: data.phoneNumber,
            stepCount: data.newSteps,
          });
          ws.send("success");
        }
      });
    }
  });
});

const steps = async (req, res) => {
  {
    await User.findOne({ phoneNumber: req.params.phoneNumber }).exec(function (
      err,
      result
    ) {
      if (result) {
        return res.status(200).send({
          cumulativeSteps: parseInt(result.stepCount),
        });
      } else {
        return res.status(404).send({ error: "User doesn't exist" });
      }
    });
  }
};
module.exports = { steps };
