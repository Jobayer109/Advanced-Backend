const express = require("express");
const app = express();
app.use(express.json());
const books = [
  {
    id: 1,
    name: "Hello JS",
    price: 100,
  },
  {
    id: 2,
    name: "Advance JS",
    price: 200,
  },
  {
    id: 3,
    name: "Basic Javascript",
    price: 300,
  },
  {
    id: 4,
    name: "JS Tips and Tricks",
    price: 400,
  },
  {
    id: 5,
    name: "JS the Boss",
    price: 500,
  },
];

app.get("/books", (req, res) => {
  if (req.query.price === "300") {
    return res.json(books.filter((book) => book.price <= 300));
  } else if (req.query.price === "200") {
    return res.json(books.filter((book) => book.price <= 200));
  }
  return res.json(books);
});

app.post("/books", (req, res) => {
  const book = req.body;
  books.push(book);
  res.json(books);
});

app.listen(8080, () => {
  console.log("Server is listening at port: 8080");
});
