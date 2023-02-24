const { STATUS } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const generateAccessToken = require("../constants/generateToken");
const user = require("../models/user");
console.log("====",cryp.encryptData(JSON.stringify({websiteName:"example.com"})))
exports.register = async(req,res)=>{
    try{
        let userData = await cryp.decryptData(req.body.payload);
        // console.log(userData);
        let isUserExist = await user.find({userName:userData.userName}).lean()        
        if(isUserExist.length > 0){
            return res.status(STATUS.BAD_REQUEST).send({"error":"User Already Exist"})
        }else{
            // console.log(userData);
        let adduser = new user(userData);
        adduser.save();
        }
        return res.status(STATUS.OK).send({"message":"Registered Successfully"})
    }catch(err){
        console.log(err.message);
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
exports.login = async(req,res)=>{
    try{
        let userCred = await cryp.decryptData(req.body.payload);
        let {userName,userRole,validationCode,password} = userCred;
        let userData = await user.find({userName:userName,password:password}).lean()
        if(userData.length == 0){
            return res.status(STATUS.BAD_REQUEST).send({"error":"Invalid User"})
        }
        let token = generateAccessToken(userCred);
        return res.status(STATUS.OK).send({"message":"logged in successfully","data":{token:token,userName:userName,isActive:userData[0].isActive,userRole:userRole,validationCode:validationCode}})
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err.message)
    }
}