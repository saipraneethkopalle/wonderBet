const { STATUS } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const generateAccessToken = require("../constants/generateToken");
const user = require("../models/user");
// console.log("====",cryp.encryptData(JSON.stringify({roleId:2})))
exports.register = async(req,res)=>{
    try{
        let userData = await cryp.decryptData(req.body.payload);
        console.log(userData);
        let isUserExist = [];
        if(userData.userRoleId != 1){
            isUserExist = await user.find({userName:userData.userName}).lean()
        }else{
            isUserExist = await user.find({userRoleId:1}).lean()
            userData.createdBy="default"
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
        let token = generateAccessToken(userCred);
        res.status(STATUS.OK).send({"message":"logged in successfully","data":{token:token,userName:userName,isActive:userData[0].isActive,userRoleId:userData[0].userRoleId,validationCode:validationCode}})
        let data=await user.updateOne({userName:userName},{$set:{storeToken:token.token,expiry:token.expiry}})
        console.log("fdsakfsad",data,token);
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err.message)
    }
}