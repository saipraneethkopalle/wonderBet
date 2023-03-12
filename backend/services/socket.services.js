
const redisdb = require("../constants/redis-db");
const io = require('socket.io-emitter')({ host: '127.0.0.1', port: 6379 });

process.on('uncaughtException', (err) => {
    process.exit(1);
});

const getActiveUsers=async(element)=>{
    try{
        console.log('live-'+element);
        let user= JSON.parse(await redisdb.GetRedis('live-'+element))
        console.log(user);
        io.emit('live-'+element,user);
    }catch(err){
        console.log(err);
    }
}


setInterval(async()=>{
    try{
    let users = await redisdb.GetRedis('activeUsers') || [];
    // console.log("users",users);
    if (users) {
        const userRooms = JSON.parse(users).map(user => (user.slice(0,user.lastIndexOf("/"))));
        for (const element of userRooms) {
            element.length && getActiveUsers(element);
        }
    }
    }catch(err){
        console.log(err);
    }
},500)

// const chunkArray = (myArray, size) => {
//     var results = [];
//     while (myArray.length) {
//         results.push(myArray.splice(0, size));
//     }
//     return results;
// }