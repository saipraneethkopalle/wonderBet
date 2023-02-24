const { STATUS } = require("../constants/Config");
const CONST = require("../constants/CONST");
const cryp = require("../constants/cryptojs");
const addWebsites=require("../models/websit");
exports.addWebsite = async(req,res)=>{
    try{
        let data = await cryp.decryptData(req.body.payload)
        console.log(data);
        let websiteData = await addWebsites.find({websiteName:data.websiteName}).lean();
        if(websiteData.length > 0){
            return res.status(STATUS.BAD_REQUEST).send({"error":"Already Exist"})
        }
        let addWebsite = new addWebsites(data);
        addWebsite.save();
        return res.status(STATUS.OK).send({"message":"Website Added  Successfully"})
       
    }catch(err){
        return res.status(STATUS.BAD_REQUEST).send(err);
    }
}



exports.getAllWebsite = async(req,res)=>{
    try{
        let data = await addWebsites.find().lean()
        res.status(STATUS.OK).send({"message":"Result Fetched!",data:data})
    }catch(err){
        res.status(STATUS.BAD_REQUEST).send(err.message);
    }
}
