const Admin = require("../models/admin");

module.exports.signUp = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports.logIn = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports.forgotPassword = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports.resetPassword = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports.update = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};
module.exports.delete = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports.block = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};
