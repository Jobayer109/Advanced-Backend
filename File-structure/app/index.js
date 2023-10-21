require("dotenv").config("../.env");
const express = require("express");
const app = express();
const { customError, errorHandler } = require("./error");

app.use(require("./middleware"));
app.use(require("./routes"));

// Error handling
app.use(customError);
app.use(errorHandler);

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
