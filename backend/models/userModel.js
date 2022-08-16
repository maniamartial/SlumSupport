const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Add the username"],
      unique: true,
    },
    email: {
      type: String,
      required: [true, "Add the email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Add the password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
