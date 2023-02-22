const { STATUS } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const generateAccessToken = require("../constants/generateToken");
const superUser = require("../models/superUser");
const user = require("../models/user");

exports.changePassword=async(req,res)=>{
    try{
        let payload = await cryp.decryptData(req.body.payload);
        let updatUser = await user.updateOne({password:payload.oldPassword},{$set:{password:payload.newPassword}})
        return res.status(STATUS.OK).send({"message":"Password Changed Successfully"});
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err);
    }
}
exports.addSuperAdmin =async(req,res)=>{
    try{
        let payload = await cryp.decryptData(req.body.payload);
        // console.log(payload);
        let exist = await superUser.find({userName:payload.userName}).lean();
        if(exist.length > 0){
            return res.status(STATUS.BAD_REQUEST).send({"error":"Already Exist"})
        }
        let addSuperAdmin = new superUser(payload);
        addSuperAdmin.save();
        return res.status(STATUS.OK).send({"message":"Super User Admin added Successfully"})
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err);
    }
}