const express = require("express");
const http = require("http");
const cors = require("cors");
const socketIo = require("socket.io");
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001;
const app = express();
app.use(express.static("src/public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const api_routes = require("./src/routes/api");
api_routes(app);
const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
      msg= "server "+msg;
      console.log(msg);
      io.emit("chat message", msg);
    });
  });
server.listen(port, () => console.log(`Listening on port ${port}`));