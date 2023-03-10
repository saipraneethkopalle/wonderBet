
const redisdb = require("../constants/redis-db");
const io = require('socket.io-emitter')({ host: '127.0.0.1', port: 6379 });

process.on('uncaughtException', (err) => {
    process.exit(1);
});
const capitalize = (provider) => {
    return provider.charAt(0).toUpperCase() + provider.slice(1);
}

const getOutRooms=async()=>{
    let outRooms = await redisdb.GetRedis('OutRooms');
    io.emit('leaveRoom',outRooms)
}

setInterval(()=>{
    getOutRooms();
},500)