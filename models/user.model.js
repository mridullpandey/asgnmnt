const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    phoneNumber: {
      type: Number,
      required: true,
      trim: true,
      unique: true,
      minLength: 10,
    },

    stepCount: { type: Number, default: 0 },
  },
  { timestamps: true, versionKey: false }
);

module.exports = mongoose.model("User", userSchema);
