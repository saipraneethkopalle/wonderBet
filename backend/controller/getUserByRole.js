const user=require("../models/user")
const { STATUS } = require("../constants/Config");

exports.getUserByRoleId = async(req,res)=>{
    try{
        console.log("type",typeof(req.params.userRoleId))
        let data1;
         if(Number(req.params.userRoleId<=8)) {
            data1 = Number(req.params.userRoleId)+1
            
        } else {
            return res.status(STATUS.BAD_REQUEST).send({"message":"Invalid Role Id"})
        }
        console.log("role id is",data1)
        let data = await user.find({userRoleId:data1}).lean()
        res.status(STATUS.OK).send({"message":"Result Fetched!",data:data})


        

    }catch(err){
        res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}

