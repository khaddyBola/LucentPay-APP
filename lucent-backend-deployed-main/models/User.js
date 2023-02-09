const mongoose = require("mongoose");
const validator = require("validator");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    firstname: {
      type: String,
      require: true,
    },
    lastname: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      lowercase: true,
      trim: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error("Invalid email");
        }
      },
    },
    username: {
      type: String,
      require: true,
    },
    roles: {
      User: {
        type: Number,
        default: 2001,
      },
      Admin: Number,
    },
    phn: {
      type: Number,
      require: true,
    },
    country: {
      type: String,
      require: true,
    },
    region: {
      type: String,
      require: true,
    },
    pwd: {
      type: String,
      required: true,
      minLength: 8,
      trim: true,
      validate(value) {
        if (value.toLowerCase().includes("password")) {
          throw new Error("password contains password");
        }
      },
    },
    refreshToken: [String],
  },
  {
    collection: "users-data",
  }
);

module.exports = mongoose.model("User", userSchema);
