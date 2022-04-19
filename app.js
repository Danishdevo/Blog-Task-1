const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const initRoute = require("./routers/");
const app = express();
dotenv.config();
initRoute(app);
connectDB();

module.exports = app;
