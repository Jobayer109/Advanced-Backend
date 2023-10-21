require("dotenv").config();
const http = require("http");
const app = require("./app/index");

const server = http.createServer(app);

const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`Server is listening in port: ${PORT}`);
});
