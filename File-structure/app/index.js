const express = require("express");
const app = express();

// It helps in the time of deployment
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "success" });
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
