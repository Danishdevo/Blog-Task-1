const Blog = require("../models/blog");

module.exports.create = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports.getAll = async (req, res) => {
  try {
    return res.status(201).json("Success");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error.message);
  }
};

module.exports.getOne = async (req, res) => {
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
