const userLevel = require("../models/userLevel");
const {levelDetails} = require("../constants/Config");
const createLevels=async()=>{
    try{
        let levelExists = await userLevel.find(levelDetails[0]).lean()
        if(levelExists.length == 0){            
            let addlevel =await userLevel.insertMany(levelDetails,{ordered:false})
        }
    }catch(err){
        console.log(err);
    }
}
createLevels()