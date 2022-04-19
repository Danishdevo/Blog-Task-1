const mongoose = require("mongoose");
const validator = require("validator");
const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("email not valid");
      }
    },
  },
  phone: {
    type: Number,
    required: true,
    minlength: 10,
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
  },
  blocked: {
    type: Boolean,
  },
  profilePicture: {
    type: String,
  },
});

module.exports = mongoose.model("admin", adminSchema);
