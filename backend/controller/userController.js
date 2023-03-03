const { STATUS } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const generateAccessToken = require("../constants/generateToken");
const user = require("../models/user");
const userLevel = require("../models/userLevel");

exports.getLevelDetails = async(req,res)=>{
    try{
        let result = await userLevel.find().lean()
        return res.status(STATUS.OK).send({"message":"Result fetched!","data":result})
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err);
    }
}
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
        let exist = await user.find({userName:payload.userName}).lean();
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
exports.getSuperAdmin = async(req,res)=>{
    try{
        let adminDetails = await user.find().lean().exec();
        return res.status(STATUS.OK).send({message:'Success',data:adminDetails})

    }catch(err) {
        return res.status(STATUS.BAD_REQUEST).send({message:'error',error:err.message})

    }
}
exports.updateSuperAdminStatus = async(req,res)=>{
    try{
        let payload = await cryp.decryptData(req.body.payload)
        let udateObj = await user.updateOne({userName:payload.userName},{$set:{adminstatus:payload.adminstatus}})
        return res.status(STATUS.OK).send({message:'Updated Successfully'})
    }catch(err) {
        return res.status(STATUS.BAD_REQUEST).send({message:'error',error:err.message})

    }
}