const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const http = require("http").Server(app);
const helmet = require("helmet");
const compression = require('compression')
const cluster = require('cluster')
const cors = require("cors");
const routes = require("./routes/routes");
const db = require("./constants/db");
const redisdb = require("./constants/redis-db");
const Socketconnection = require('./services/socket');

const auth = require("./middleware/auth");
const clevels = require("./constants/createLevels");
const dotenv = require("dotenv");
const beforelogin = require("./routes/beforelogin");
app.use(helmet());
app.use(cors());
app.use(express.json());
app.set(dotenv.config())
app.use('/api/v1/auth',auth);
app.use('/api/v1/auth',routes);
app.use('/api/v1/noAuth',beforelogin);

// app.use(metricsMiddleware);
app.use(compression());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.json())
// app.use(helmet());
app.use(cors());
const normalizePort = val => {
    var port = parseInt(val, 10);
  
    if (isNaN(port)) {
      // named pipe
      return val;
    }
  
    if (port >= 0) {
      // port number
      return port;
    }
  
    return false;
  };
const totalCPUs = require("os").cpus().length;
 
if (cluster.isMaster) {
  //console.log(`Number of CPUs is ${totalCPUs}`);
 // console.log(`Master ${process.pid} is running`);
  Socketconnection.configure(http, 'master');
  // Fork workers.
  for (let i = 0; i < totalCPUs; i++) {
    cluster.fork();
  }
 
  cluster.on("exit", (worker, code, signal) => {
   // console.log(`worker ${worker.process.pid} died`);
   // console.log("Let's fork another worker!");
    cluster.fork();
  });
} else {
    const port = 4000;
    app.set("port", port);
Socketconnection.configure(http, 'worker');
Socketconnection.io.on("connection", async (socket) => {
        
    socket.on('join_user',async function(user){
      // console.log(user);
        socket.join("active/"+user);
        // let rooms= JSON.parse(await redisdb.GetRedis('rooms-available'))
        // socket.emit("activeUsers",rooms)
    });      

       
     socket.on('stats', function (data) {
        socket.join("room-stats");
      });

    socket.on('destroy_room', function (data) {
        socket.leave("active/"+data);
    });
    socket.on('disconnect', () => {
        //console.log(`Socket ${socket.id} disconnected.`);
        delete io.sockets.adapter.rooms[socket.id];     
  
        
      });
});
//console.log(`Worker ${process.pid} started`);
 
  app.get("/", (req, res) => {
    res.send("Hello World!");
  });
 
  app.get("/api/:n", function (req, res) {
    let n = parseInt(req.params.n);
    let count = 0;
 
    if (n > 5000000000) n = 5000000000;
 
    for (let i = 0; i <= n; i++) {
      count += i;
    }
 
    res.send(`Final count is ${count}`);
  });
  http.listen(port, function () {
    console.log('Server Started', port);
});
}
