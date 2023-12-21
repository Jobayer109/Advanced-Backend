require("dotenv").config("../.env");
const express = require("express");
const app = express();
const { customError, errorHandler } = require("./error");

app.use(require("./middleware"));
app.use(require("./routes"));

const myDB = require("../db/db");

myDB.create("user 1", 10);
myDB.create("user 2", 10);
myDB.create("user 3", 10);
myDB.create("user 4", 10);

const bulk = myDB.bulkCreate("Bulker", 10, 2);
console.log("Bulk:", bulk);

const tickets = myDB.find();
console.log("All tickets:", tickets);

const draw = myDB.draw(3);
console.log("Winners:", draw);

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
