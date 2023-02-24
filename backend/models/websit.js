const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const matchSchema = new mongoose.Schema({
    websiteName:{type:String,unique:true,required:true},
    isUsed:{type:Boolean,default:false},
    usedFor:{type:String}
},{ timestamps: true })

matchSchema.index({ isActive: 1, userName: 1});
matchSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Website', matchSchema);