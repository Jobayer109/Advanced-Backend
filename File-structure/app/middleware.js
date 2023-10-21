const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const middlewares = [morgan("dev"), cors(), express.json()];

module.exports = middlewares;
