require("dotenv").config();
const http = require("http");
const app = require("./app/index");
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening in port: ${PORT}`);
});
