const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

// Middlewares
const middleware = (req, res, next) => {
  console.log(`${req.url}, ${req.method}, ___${new Date().toISOString()}`);
  next();
};

// Global middleware
app.use(middleware);

// Routes
app.get("/", middleware, (req, res, next) => {
  res.json({ message: "Hello world 2 times" });
});

app.get("/hello", (req, res, next) => {
  res.json({ message: "Another hello from server" });
});

// Server listening
app.listen(port, () => {
  console.log(`Server is listening from http//:localhost:${port}`);
});
