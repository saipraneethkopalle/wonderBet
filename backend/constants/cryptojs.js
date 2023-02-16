const crypto = require("crypto-js");
const SECRET_KEY = "WB13579"
exports.encryptData = async(data)=>{
    try{
        return  crypto.AES.encrypt(data,SECRET_KEY).toString();
    }catch(err){
        return err.message
    }
}
exports.decryptData = async(encryptedData)=>{
    try{
        var bytes  = crypto.AES.decrypt(encryptedData, SECRET_KEY)
        return JSON.parse(bytes.toString(crypto.enc.Utf8));
    }catch(err){
        return err.message
    }
}