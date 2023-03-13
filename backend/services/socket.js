const socket = require('socket.io');
const redis = require('socket.io-redis');
const redisdb = require('../constants/redis-db');


const Socketconnection = (function () {
  this.io = null;
  this.configure = function (server, type) {
    this.io = socket(server, {
      serveClient: true,
      cookie: false
    });
    this.io.adapter(redis({ host: '127.0.0.1', port: 6379 })); 
    if (type == 'master') {
      getET(this.io);
    }
  }
  return this;
})();

const addRooms = async (io) => {  
  const rooms = await io.of('/').adapter.allRooms();
  const room = Array.from(rooms); 
  let leaveRooms=JSON.parse(await redisdb.GetRedis("OutRooms")) || [];
for(var rms of leaveRooms){ 
    // console.log(rms);
  io.emit('leaveRoom/',rms)
}
}

const getET = (io) => {
  setInterval(() => {
    addRooms(io);
  }, 500);
}

module.exports = Socketconnection;