require("dotenv").config("../.env");
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

app.use([morgan("dev"), cors(), express.json()]);

// It helps in the time of deployment
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Server's health is good" });
});

// Error handling
app.use((_req, _res, next) => {
  const error = new Error("Our custom error");
  error.status = 404;
  next(error);
});

app.use((error, _req, res, _next) => {
  if (error.status) {
    return res.status(error.status).json({ message: error.message });
  }
  res.status(500).json({ message: "Something went wrong with server" });
});
/*
    Reasons of exporting app from index file without app.listening________
        1. It helps when we write our test code here. bcz___
            - It run only app, not server.
            - 
        2. Protocol calling issues like____
            - HTTP 
            - Websocket 
*/
module.exports = app;
