const { STATUS,defaultPassword } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const generateAccessToken = require("../constants/generateToken");
const user = require("../models/user");
console.log("====",cryp.encryptData(JSON.stringify({userName:"owner",password:"Owner1234",userRoleId:1,default:true})))
exports.register = async(req,res)=>{
    try{
        let userData = await cryp.decryptData(req.body.payload);
        console.log(userData);
        let isUserExist = [];
        if(userData.userRoleId != 1){
            isUserExist = await user.find({userName:userData.userName}).lean()
        }else{
            isUserExist = await user.find({userRoleId:1}).lean()
            // userData.createdBy="default"
        }        
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
        let {userName,validationCode,password} = userCred;
        let userData = await user.find({userName:userName,password:password}).lean()
        if(userData.length == 0){
            return res.status(STATUS.BAD_REQUEST).send({"error":"Invalid User"})
        }
        let trackUser=await user.updateOne({userName:userName},{$set:{validationCode:validationCode}});
        let isLogin=true;
        console.log(userData)
        if(userData[0].default){
            isLogin = false;
        }else{
            isLogin = true;
        }
        let token = generateAccessToken(userCred);
        return res.status(STATUS.OK).send({token:token,userName:userName,isActive:userData[0].isActive,level:userData[0].userRoleId,validationCode:validationCode,isLogin:isLogin,expiresIn:7200})
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err.message)
    }
}