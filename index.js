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
const users = [
  {
    username: 'john',
    password: 'password123admin',
    role: 'admin'
  }, {
    username: 'anna',
    password: 'password123member',
    role: 'member'
  }
];
app.post('/login', (req, res) => {
  // Read username and password from request body
  const { username, password } = req.body;
  // Filter user from the users array by username and password
  const user = users.find(u => { return u.username === username && u.password === password });
  if (user) {
    // Generate an access token
    const accessToken = jwt.sign({ username: user.username, role: user.role }, accessTokenSecret);
    res.json({
      accessToken
    });
  } else {
    res.send('Username or password incorrect');
  }
});
const books = [
  {
    "author": "Chinua Achebe",
    "country": "Nigeria",
    "language": "English",
    "pages": 209,
    "title": "Things Fall Apart",
    "year": 1958
  }
];
const authenticateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};
app.get('/getTestData', authenticateJWT, (req, res) => {
  res.json(books);
});



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