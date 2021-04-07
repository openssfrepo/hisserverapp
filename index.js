const express = require("express");
const http = require("http");
const https = require("https");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const socketIo = require("socket.io");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001;
const app = express();
app.use(express.static("src/public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const api_routes = require("./src/routes/api");
api_routes(app);
const accessTokenSecret = 'hisappAuthAccessTocken';
const server = http.createServer(app);
// const server = https.createServer({
//   key: fs.readFileSync(path.join(__dirname, './src/cert', 'key.pem')),
//   cert: fs.readFileSync(path.join(__dirname, './src/cert', 'cert.pem'))
// }, app);

const io = socketIo(server); // < Interesting!

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("chat message", msg => {
    console.log(msg);
    io.emit("chat message", msg);
  });
});
server.listen(port, () => console.log(`Listening on port ${port}`));