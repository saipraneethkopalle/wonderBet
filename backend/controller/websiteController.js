const { STATUS } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const match = require("../models/match");
const addWebsites=require("../models/websit");
exports.addWebsite = async(req,res)=>{
    try{
        let data = await cryp.decryptData(req.body.payload)
        console.log(data);
       
    }catch(err){
        console.log("error");
    }
}