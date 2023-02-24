const { STATUS } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const match = require("../models/match");
exports.addMatches = async(req,res)=>{
    try{
        let data = await cryp.decryptData(req.body.payload)
        let result = new match(data)
        result.save()
        return res.status(STATUS.OK).send({"message":"Successfully stored","data":data})
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
exports.getAllMatches = async(req,res)=>{
    try{
        let data = await match.find().lean()
        res.status(STATUS.OK).send({"message":"Result Fetched!",data:data})
    }catch(err){
        res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}