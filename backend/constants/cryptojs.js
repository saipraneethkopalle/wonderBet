const crypto = require("crypto-js");
exports.encryptPayload = async(payload)=>{
    try{
        return crypto.AES.encrypt(payload,proccess.env.SECRET_KEY).toString();
    }catch(err){
        return err.message
    }
}
exports.decryptPayload = async(encryptedData)=>{
    try{
        return JSON.parse(crypto.AES.decrypt(encryptedData,proccess.env.SECRET_KEY));
    }catch(err){
        return err.message
    }
}