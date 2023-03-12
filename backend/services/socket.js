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
  // console.log("all",room);
  const liveRoom = room.filter(dt => dt.startsWith('active')).map(mt => mt && mt.substring(mt.indexOf('/') + 1));
  let newArr = []
  let obj = {};
  var s = liveRoom.filter(st => {
    obj[st.split('/')[0]] = st.split('/')[1]
    newArr.push(obj);
  })
  newArr = [...new Set(newArr)]
  // console.log("currentRooms",newArr);
  // await redisdb.SetRedis("rooms-available",JSON.stringify(newArr));
  io.emit('activeUsers',newArr);
}


const getET = (io) => {
  setInterval(() => {
    addRooms(io);
  }, 500);
}

module.exports = Socketconnection;