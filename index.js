const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const index = require("./src/routes/api");
const bodyParser = require('body-parser');
const port = process.env.PORT || 4001;
const app = express();
app.use(express.static("src/public"));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(index);

const server = http.createServer(app);

const io = socketIo(server); // < Interesting!

// io.on('connection',function(socket){
//     socket.on('message',function(msg){

//         console.log('message: ' + msg);

//         io.emit('message', msg);
//     });
// });
io.on("connection", socket => {
    console.log("a user connected :D");
    socket.on("chat message", msg => {
      msg= "server "+msg;
      console.log(msg);
      io.emit("chat message", msg);
    });
  });
server.listen(port, () => console.log(`Listening on port ${port}`));