const User = require("../models/user.model");

const signUp = async (req, res) => {
  const userObj = {
    phoneNumber: req.body.phoneNumber,
  };

  try {
    const user = await User.findOne({ phoneNumber: req.body.phoneNumber });
    if (!user) {
      const userCreated = await User.create(userObj);
      const response = {
        status: `A new User created Successfully!!`,
        phoneNumber: userCreated.phoneNumber,
      };
      return res.status(201).send(response);
    }
    return res.redirect("/dashboard");
  } catch (err) {
    console.log(err.message);
    res.status(500).send({
      message: "Error while signing up!!",
    });
  }
};

module.exports = { signUp };
